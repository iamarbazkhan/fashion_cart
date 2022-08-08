import { ActionTypes } from "../contants/actions-types"
const initialState={
}

export const userAuthReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case (ActionTypes.USER_AUTH):
            return{...state,payload};
        default:
            return state;
    }

}