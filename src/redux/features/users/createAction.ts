import axios from "axios";
import { createAsyncThunk,isRejectedWithValue } from "@reduxjs/toolkit";
import { User } from "./userSlice";

const api = "https://648c3b3f8620b8bae7ec8260.mockapi.io/crud";

export const getusers = createAsyncThunk('users/getusers',async()=>{
    try {
        const response = await axios(api)
        return response.data
    } catch (error) {
        console.log('error',error)
        return isRejectedWithValue(error)
    }
})

export const getSingleUser = createAsyncThunk('users/getuserdetails',async(id:string)=>{
    try {
        const response  = await axios.get(`${api}/${id}`)
        return response.data
    } catch (error) {
        return isRejectedWithValue(error)
        
    }

})

export const createUser = createAsyncThunk('users/createuser',async(data:User)=>{
    try {
        const response = await axios.post(api,data)
    return response.data
    } catch (error) {
        return isRejectedWithValue(error)
        
    }
})

export const updateUser = createAsyncThunk('users/updateuser',async(data:User)=>{
   try {
    const response = await axios.put(`${api}/${data?.id}`,data)
    return response.data
   } catch (error) {
    return isRejectedWithValue(error)
    
   }

})
export const deleteUser = createAsyncThunk('users/deleteuser',async(id:string)=>{
    try {
       const response = await axios.delete(`${api}/${id}`)
       return response.data
    } catch (error) {
        return isRejectedWithValue(error)
        
    }
})