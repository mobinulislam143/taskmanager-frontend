import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import RegistationPage from "./page/RegistationPage"
import LoginPage from "./page/LoginPage"
import VerifyEmailPage from "./page/VerifyEmailPage"
import ProfilePage from "./page/ProfilePage"
import ProductPage from "./page/ProductPage"
import UserProductPage from "./page/UserProductPage"
import UpadateProductPage from "./page/UpadateProductPage"
import CreateProductPage from "./page/CreateProductPage"
import ProductListPage from "./page/ProductListPage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />

        {/* User Router */}
        <Route path="/registration" element={<RegistationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/VerifyEmail" element={<VerifyEmailPage/>} />
        <Route path="/my-profile" element={<ProfilePage/>} />

        {/* Product Router */}
        <Route path="/All-product" element={<ProductPage/>} />
        <Route path="/user-product" element={<UserProductPage/>} />
        <Route path="/create-product" element={<CreateProductPage/>} />
        <Route path="/update-product/:id" element={<UpadateProductPage/>} />
        
        <Route path="/search-by-keyword/:keyword" element={<ProductListPage/>} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
