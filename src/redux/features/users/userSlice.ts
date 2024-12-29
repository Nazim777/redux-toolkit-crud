import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getusers,updateUser,deleteUser,createUser,getSingleUser } from "./createAction";

export type User = {
    id:string,
    name:string,
    email:string,
    age:string,
    gender:string,
}

export type userState = {
    loading:boolean,
    users:Array<User>,
    singleuser:User,
    error:string | undefined,
    searchData:Array<User>

}

const initialState:userState={
    loading:false,
    users:[],
    singleuser:{
        id:'',
        name:'',
        email:'',
        age:'',
        gender:''
    },
    error:undefined,
    searchData:[]
}



export const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getusers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getusers.fulfilled,(state,action :PayloadAction<Array<User>>)=>{
            state.loading = false
            state.users = action.payload

        })
        builder.addCase(getusers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message || "Error Fetching Users"

        })
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true;

        })
        builder.addCase(createUser.fulfilled,(state,action:PayloadAction<User>)=>{
            state.loading = false
            state.users.push(action.payload)
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message || "Error Creating User"
            
        })

        builder.addCase(updateUser.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(updateUser.fulfilled,(state,action:PayloadAction<User>)=>{
            state.loading = false;
            state.users = state.users.map(user=>user.id===action.payload.id?action.payload:user)
        })
        builder.addCase(updateUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message || "Error Updating Users"
        })
        builder.addCase(deleteUser.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled,(state,action:PayloadAction<User>)=>{
            state.loading = false;
            // console.log('delete action',action.payload)
            // const {id} = action.payload
            state.users = state.users.filter(user=>user.id !==action.payload.id)
            console.log('state users',state.users)
        })
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message || "Error Deleting User"
        })



        builder.addCase(getSingleUser.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getSingleUser.fulfilled,(state,action :PayloadAction<User>)=>{
            state.loading = false
            state.singleuser = action.payload

        })
        builder.addCase(getSingleUser.rejected,(state,action)=>{
            state.loading = false
            state.singleuser = {id:'',name:'',email:'',age:'',gender:''}
            state.error = action.error.message || "Error Fetching Single User"

        })
    },
    reducers:{
        searchUser:(state,action:PayloadAction<Array<User>>)=>{
            state.searchData = action.payload
        }
    }
})


export const {searchUser}  = userSlice.actions;
export const userSelector = (state:RootState)=>state.userReducer;
export default userSlice.reducer;