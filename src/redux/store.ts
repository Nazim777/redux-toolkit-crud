import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice'
import todoReducer from './features/toods/todoSlice'

export const store = configureStore({
    reducer:{
        userReducer,
        todoReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
