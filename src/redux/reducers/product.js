import { ActionTypes } from "../contants/actions-types"

const initialState={
        products:[]
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_PRODUCTS:
            return {...state,products:[...action.payload]};
        default:
            return state;
    }
}