import { useParams } from "react-router"
import InputForm from "../../../components/InputForm"
import { useAppDispatch,useAppSelector } from "../../../redux/hook"
import { userSelector } from "../../../redux/features/users/userSlice"
import { getSingleUser } from "../../../redux/features/users/createAction"
import { useEffect } from "react"
import Loader from "../../../components/Loader"
const UpdateUser = ()=>{
    const params = useParams()
    const {id} = params
    const dispatch = useAppDispatch()
    const {singleuser,loading} = useAppSelector(userSelector)
   
    useEffect(()=>{
       if(id){
        dispatch(getSingleUser(id))
       }

    },[id])
    if(loading){
        return<Loader/>
    }
  
    return(
        <>
        <h4>Update User</h4>
         <InputForm userEdit={singleuser}/>
        </>
    )
}

export default UpdateUser