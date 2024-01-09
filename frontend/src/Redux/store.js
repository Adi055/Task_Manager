import {applyMiddleware,legacy_createStore,combineReducers} from "redux"
import AuthReducer from "./AuthReducer";
import {thunk} from "redux-thunk";



const rootReducer=combineReducers({
    AuthReducer,
  
})

export const store= legacy_createStore(rootReducer,applyMiddleware(thunk))