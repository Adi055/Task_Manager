import {Route, Routes} from "react-router-dom"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"

const AllRoutes=()=>{
  return (

    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )

}

export default AllRoutes