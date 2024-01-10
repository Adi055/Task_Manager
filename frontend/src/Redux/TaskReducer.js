import { ADD_TASK, DELETE_TASK, EDIT_TASK, GET_TASK } from "./ActionType";

const initialState = {
  
  data:[]
};


const TaskReducer=(state=initialState, {type,payload})=>{

switch(type){

  case GET_TASK:{
    return {
      ...state,
      data:payload
    }
  }

  case ADD_TASK:{
    return {
      ...state,

    }
  }
  case DELETE_TASK:{
    return {
      ...state,
      data:state.data.filter((ele)=>ele.id!=payload)
    }
  }
  case EDIT_TASK:{
    const updateTask=state.data.map((item)=>{
      if(item.id==payload.id){
        return item=payload
      }
      else{
       return item
      }
    })
    return {...state,data:updateTask}
  }

  default:{
    return state
  }
}

}

export default TaskReducer