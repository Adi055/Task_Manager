import {applyMiddleware,legacy_createStore,combineReducers} from "redux"
import AuthReducer from "./AuthReducer";
import TaskReducer from "./TaskReducer";
import {thunk} from "redux-thunk";



const rootReducer=combineReducers({
    AuthReducer,
  TaskReducer
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))