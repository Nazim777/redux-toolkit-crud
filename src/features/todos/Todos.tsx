import { useAppDispatch,useAppSelector } from "../../redux/hook"
import { addTodo, deleteTodo, Todo, todoSelector,updateTodo } from "../../redux/features/toods/todoSlice"
import { useEffect, useState } from "react"
const Todos =()=>{
    const selectedTodos = useAppSelector(todoSelector)
    const [todos,setTodos] = useState<Array<Todo>>([])
    const dispatch  = useAppDispatch()
    const [editingTodoId,setEditingTodoId] = useState<string  | null>(null)
    const [newTodo,setNewTodo] = useState({
        title:'',
        desc:''
    })



   
    


    useEffect(()=>{
        setTodos(selectedTodos)
        return()=>{
            console.log('components unmounting....')
        }

    },[selectedTodos])

    const handleChange = (e:any)=>{
        setNewTodo({
            ...newTodo,
            [e.target.name]:e.target.value
        })

    }

    



    const handleSubmit = (e:any)=>{
        e.preventDefault()
        if(newTodo.title !=='' && newTodo.desc !== ''){
           if(editingTodoId){
            const editTodo = todos.find(todo=>todo.id===editingTodoId)
            if(editTodo){
                const updateTodoObj = {
                    id:editingTodoId,
                    title:newTodo.title,
                    desc:newTodo.desc,
                    isComplete:editTodo?.isComplete 
                }
                dispatch(updateTodo(updateTodoObj))
                setEditingTodoId(null)
            }

           }
           else{
            const newTodoObj = {
                id:(todos.length+1).toString(),
                title:newTodo.title,
                desc:newTodo.desc,
                isComplete:false
            }
            dispatch(addTodo(newTodoObj))
           }
            setNewTodo({
                title:'',
                desc:''
            })
        }
        

    }


    const handleDelete = (id:string)=>{
        dispatch(deleteTodo(id))
    }



    const handleEdit = (id:string)=>{
        setEditingTodoId(id)
        const updateTodo = todos.find(todo=>todo.id===id)
       if(updateTodo){
        setNewTodo({
            title:updateTodo?.title,
            desc:updateTodo?.desc
        })

       }
    }



    const handleCancel = ()=>{
        setEditingTodoId(null)
        setNewTodo({
            title:'',
            desc:''
        })
    }


    const handleToggelTodoUpdate = (id:string,isComplete:boolean)=>{
        const todoUpdate = todos.find(todo=>todo.id===id)
        if(todoUpdate){
            const todoUpdateObj = {
                ...todoUpdate,
                isComplete:!isComplete
            }
            dispatch(updateTodo(todoUpdateObj))
        }

    }
return(
    <>
    <h4>Todos Components</h4>
    <div>
        {todos.length>0 && todos.map(todo=>
            <div key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.desc}</p>
               <div>
               {todo.isComplete?'Completed':'Incomplete'}
               <input onChange={()=>handleToggelTodoUpdate(todo.id,todo.isComplete)} type="checkbox" checked={todo.isComplete}/> 
               </div>
              <div>
              <button onClick={()=>handleEdit(todo.id)}>edit</button>
              <button onClick={()=>handleDelete(todo.id)}>delete</button>
              </div>
            </div>
        )}
    </div>

    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}  value={newTodo.title} name="title" placeholder="Enter the title..."/> <br />
            <input type="text" onChange={handleChange} value={newTodo.desc} name="desc" placeholder="Enter the desc..." /><br />
            <button type="submit">{editingTodoId?'Update Todo':'Add Todo'}</button>
            {editingTodoId && <button onClick={handleCancel}>cancel</button>}
        </form>
    </div>
    </>
)
}

export default Todos