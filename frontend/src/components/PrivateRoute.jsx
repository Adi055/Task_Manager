
import { Navigate } from "react-router-dom";


const PrivateRoute=({children})=>{
    
    
    let token=JSON.parse(localStorage.getItem("token"))
        console.log(token);
       
       if(!token){
        return <Navigate to="/login"/>
       }

    return (
        children
    )
}

export default PrivateRoute