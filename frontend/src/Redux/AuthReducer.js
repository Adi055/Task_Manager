import { Login_Error, Login_Request, Login_Success, Logout_Success } from "./ActionType";

const initialState = {
    isLoading: false,
    isError: false,
    token:""
  };


const AuthReducer=(state=initialState,{type,payload})=>{

switch(type){
    case Login_Request: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case Login_Error:{
        return {
            ...state,
            isLoading: false,
            isError: true,
          };
      }
      case Login_Success: {
        return {
            ...state,
            isLoading:false,
            isError:false,
            isAuth:true,
            token:payload
        };
      }
      

    default:{
        return state
    }
}


}

export default AuthReducer