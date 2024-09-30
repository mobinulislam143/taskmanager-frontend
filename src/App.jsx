import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Page404 from "./Pages/Page404"
import { Fragment } from "react"
import CanceledPage from "./Pages/CanceledPage"
import CompletedPage from "./Pages/CompletedPage"
import CreatePage from "./Pages/CreatePage"
import DashboardPage from "./Pages/DashboardPage"
import LoginPage from "./Pages/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage"
import VerifyOtpPage from "./Pages/VerifyOtpPage"
import NewPage from "./Pages/NewPage"
import ProgressPage from "./Pages/ProgressPage"
import FullScreenLoader from "./components/Layout/FullScreenLoader"
import ProfilePage from "./Pages/ProfilePage"
import { getToken } from "./helper/SessionHelper"


function App() {
  if(getToken()){
    return (
      <>
        <Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<Navigate to={'/'} replace />} />

              <Route path="/canceled" element={<CanceledPage/>} />
              <Route path="/completed" element={<CompletedPage/>} />
              <Route path="/create-task" element={<CreatePage/>} />
              <Route path="/progress" element={<ProgressPage/>} />
              <Route path="/new" element={<NewPage/>} />
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
              <Route path="/verifyOtp" element={<VerifyOtpPage/>} />
              <Route path="*" element={<Page404/>} />
            </Routes>
          </BrowserRouter>
          <FullScreenLoader/>
        </Fragment>
      </>
    )
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/canceled" element={<Navigate to='/login' replace />} />
            <Route exact path="/Login" element={<LoginPage />}/>

            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader/>
      </Fragment>
    )
  }
}


export default App
