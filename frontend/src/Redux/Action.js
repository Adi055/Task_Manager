import { ADD_TASK, DELETE_TASK, EDIT_TASK, GET_TASK, Login_Success } from "./ActionType"

export const LoginSuccess=(payload)=>{
  return {type:Login_Success,payload}
}



export const TaskSuccess=(payload)=>{

  return {type:GET_TASK,payload}
  }
  
  
  export const RemoveTask=(payload)=>{
  return {type:DELETE_TASK,payload}
  }
  
  export const PostTask=()=>{
      return {type:ADD_TASK}
  }


  export const EditTask=(payload)=>{
   return {type:EDIT_TASK,payload}
  }