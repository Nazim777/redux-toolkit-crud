import './App.css'
import Todos from './features/todos/Todos'
import Users from './features/users/Users'
import Navbar from './components/headers/Navbar'
import Home from './Screeens/Home'
// https://blog.logrocket.com/using-typescript-redux-toolkit/
import { BrowserRouter, Routes, Route } from "react-router";
import UsersPage from './features/users/components/UsersPage'
import CreateUser from './features/users/components/CreateUser'
import UserDetails from './features/users/components/UserDetails'
import UpdateUser from './features/users/components/UpdateUser'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<UsersPage/>} />
      <Route path='/user-create' element={<CreateUser/>}/>
      <Route path='/user-details/:id' element={<UserDetails/>}/>
      <Route path='/user-update/:id' element = {<UpdateUser/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/default-user' element={<Users/>}/>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App
