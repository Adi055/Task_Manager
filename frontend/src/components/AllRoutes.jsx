import {Route, Routes} from "react-router-dom"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import AddTasks from "../Pages/AddTasks"
import YourTasks from "../Pages/YourTasks"
import PrivateRoute from "./PrivateRoute"
import Edit_Task from "../Pages/EditTask"


const AllRoutes=()=>{
  return (

    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addtasks" element={<PrivateRoute><AddTasks/></PrivateRoute>}/>
      <Route path="/yourtasks" element={<PrivateRoute><YourTasks/></PrivateRoute>}/>
      <Route path="/edittask" element={<Edit_Task/>}/>
    </Routes>
  )

}

export default AllRoutes