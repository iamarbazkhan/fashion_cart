import { combineReducers } from "redux";
import { productReducer } from "./product";
import {userAuthReducer} from "./userAuth";

const reducers=combineReducers({
    allProducts:productReducer,
    userAuth:userAuthReducer
})
export default reducers;