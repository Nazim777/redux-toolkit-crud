import { useAppDispatch,useAppSelector } from "../../redux/hook"
import {  userSelector } from "../../redux/features/users/userSlice"
import { useEffect, useState } from "react"
import { getusers,updateUser,deleteUser,createUser } from "../../redux/features/users/createAction"

const Users = ()=>{
    const {loading,error,users}= useAppSelector(userSelector)
    const dispatch = useAppDispatch()
    const [editinguserId,setEditinguserId] = useState<string|null>(null)
    const [newUser,setNewuser] =useState({
        name:'',
        email:'',
        age:'',
        gender:''
    })


    useEffect(()=>{
        dispatch(getusers())
       
    },[])

    const handleChange = (e:any)=>{
        setNewuser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault()
      
        
        if(newUser.name !=='' || newUser.email !=='' || newUser.age ! == '' || newUser.gender !== ''){
            if(editinguserId){
                const updatedUserObj = {
                    id:editinguserId,
                    name:newUser.name,
                    email:newUser.email,
                    age:newUser.age,
                    gender:newUser.gender
                }
                dispatch(updateUser(updatedUserObj))
                setEditinguserId(null)
            }
           else{
            const newuserObj = {
                id:(users.length+1).toString(),
                name:newUser.name,
                email:newUser.email,
                age:newUser.age,
                gender:newUser.gender
            }
            dispatch(createUser(newuserObj))
           }
           
            setNewuser({name:'',email:'',age:'',gender:''})
        }
    }

// // delete user
const handleDelete = (id:string)=>{
    dispatch(deleteUser(id))
}


const handleEdit = (id:string)=>{
    const userToEdit = users.find(user=>user.id===id)
   if(userToEdit){
    setNewuser({
        name:userToEdit?.name,
        email:userToEdit?.email,
        age:userToEdit.age,
        gender:userToEdit.gender
    })
    setEditinguserId(userToEdit.id)
   }
   
    
}


const handleCancel = ()=>{
    setNewuser({
        name:'',
        email:'',
        age:'',
        gender:''
    })
    setEditinguserId(null)
}

if(loading){
    return(
        <>
        <h4>Loading...</h4>
        </>
    )
}

if(error){
    return(
        <><h4>{error}</h4></>
    )
}

    return(
        <>
        <h4>User Components!</h4>
        <div>
            {users.length>0 &&users.map(user=>(
                <div key={user.id}>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>age: {user.age}</p>
                    <p>gender: {user.gender}</p>
                    <button onClick={()=>handleEdit(user.id)}>edit</button>
                 <button onClick={()=>handleDelete(user.id)}>delete</button> 
                </div>
            )) }
        </div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={ newUser.name} name="name" placeholder="Enter your name..." /> <br />
        <input type="text" onChange={handleChange} value={ newUser.email} name="email" placeholder="Enter your email..." /> <br />
        <input type="text" onChange={handleChange} value={ newUser.age} name="age" placeholder="Enter your age..." /> <br />
        <div style={{display:'flex',justifyContent:'center'}}>
        <input id="male" type="radio" onChange={handleChange} value='Male' name="gender"  checked={newUser && newUser.gender=='Male'}/> <br />
        <label htmlFor="male">Male</label>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <input id="female" type="radio" onChange={handleChange} value="Female" name="gender" checked={newUser && newUser.gender=='Female'}  /> <br />
        <label htmlFor="female">Female</label>
        </div>
        <button type="submit">{editinguserId?'update user':'add user'}</button>
        {editinguserId&& <button onClick={handleCancel}>cancel</button>}
        </form>
       
        </>
    )

}

export default Users