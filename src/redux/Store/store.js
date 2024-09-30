import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "../state-slice/Setting-slice"
import taskReducer from "../state-slice/Task-slice"

export default configureStore({
    reducer:{
        settings: settingReducer,
        tasks: taskReducer

    }
})