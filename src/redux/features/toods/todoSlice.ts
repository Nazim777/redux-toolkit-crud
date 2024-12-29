import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type Todo = {
    id:string,
    title:string,
    desc:string,
    isComplete:boolean
}


const initialState:Array<Todo> = []

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<Todo>)=>{
            console.log('todo',action.payload)
            state.push(action.payload)
        },
        deleteTodo:(state,action:PayloadAction<string>)=>{
            return state.filter(todo=>todo.id !==action.payload)
        },
        updateTodo:(state,action:PayloadAction<Todo>)=>{
            const index = state.findIndex(todo=>todo.id ===action.payload.id)
            if(index !==-1){
                state[index] = action.payload
            }

        }

    }
})

export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;
export const todoSelector = (state:RootState)=>state.todoReducer;
export default todoSlice.reducer;