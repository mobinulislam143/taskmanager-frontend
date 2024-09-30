import { createSlice } from "@reduxjs/toolkit";

export const taskSlice  = createSlice({
    name:"tasks",
    initialState:{
        New: [],
        Completed: [],
        Canceled: [],
        Progress: [],
        totalCount: [],
        total: []
    },
    reducers:{
        setNewTask: (state,action) => {
            state.New = action.payload
        },
        setCompletedTask: (state,action) => {
            state.Completed = action.payload
        },
        setCanceledTask: (state,action) => {
            state.Canceled = action.payload
        },
        setProgressTask: (state,action) => {
            state.Progress = action.payload
        },
        setTotalTask: (state,action) => {
            state.total = action.payload
        },
        setTotalCount: (state,action) => {
            state.totalCount = action.payload
        }
    }
})

export const {setNewTask, setCompletedTask, setCanceledTask, setProgressTask, setTotalTask, setTotalCount} = taskSlice.actions

export default taskSlice.reducer