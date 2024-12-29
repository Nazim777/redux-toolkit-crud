import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { createUser, updateUser } from "../redux/features/users/createAction";
import { User, userSelector } from "../redux/features/users/userSlice";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';



 type PropsForUpdate = {
  userEdit?:User
 }
 
const InputForm = ({userEdit}:PropsForUpdate) => {
    const dispatch = useAppDispatch()
    const {users} = useAppSelector(userSelector)
    const navigate = useNavigate()
    const [newUser,setNewuser] = useState({
        name:"",
        email:"",
        age:"",
        gender:""

    })


    useEffect(()=>{
      if(userEdit){
        setNewuser({
          name:userEdit?.name,
          email:userEdit?.email,
          age:userEdit?.age,
          gender:userEdit?.gender
        })
      }

    },[userEdit])
    

   
    const handleChange = (e:any)=>{
        setNewuser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }



    const handleSubmit = (e:any)=>{
        e.preventDefault()
        
        if(newUser.name !== '' || newUser.age !== '' || newUser.email !=='' || newUser.gender !==''){
            if(userEdit){
              const userEditObj = {
                id:userEdit.id,
                name:newUser.name,
                email:newUser.email,
                age:newUser.age,
                gender:newUser.gender
              }
              dispatch(updateUser(userEditObj))
              navigate(-1)
              toast.success('User Updated Successfully!',{theme:'dark'})

            }else{
              const newUserObj = {
                id:(users.length+1).toString(),
                ...newUser
            }
            dispatch(createUser(newUserObj))
            navigate('/users')
            toast.success('User Created Successfully!',{theme:'dark'})
            }
            setNewuser({
              name:'',
              email:'',
              age:'',
              gender:''
          })
        }

       
    }

    const handleCancel = ()=>{
      setNewuser({
        name:"",
        email:"",
        age:"",
        gender:""
      })
      navigate(-1)

    }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleChange} type="text" value={newUser.name} name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} type="email" value={newUser.email} name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAge">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={handleChange} type="text" value={newUser.age} name="age" placeholder="Enter Age" />
        </Form.Group>
        <div style={{display:'flex',justifyContent:'center'}}>
        <input onChange={handleChange} type="radio" id="male" value='Male' checked={newUser && newUser.gender ==='Male'} name="gender"/>
        <label htmlFor="male">Male</label>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <input onChange={handleChange} type="radio" id="female" value='Female' checked={newUser && newUser.gender ==='Female'} name="gender" />
        <label htmlFor="female">Female</label>
        </div>
        
        <Button style={userEdit?{marginRight:'20px'}:{marginLeft:'1px'}} type="submit">{userEdit?'Update User':'Add User'}</Button>
        {userEdit&&<Button onClick={handleCancel}>Cancel</Button>}
        
      </Form>
    </>
  );
};

export default InputForm;
