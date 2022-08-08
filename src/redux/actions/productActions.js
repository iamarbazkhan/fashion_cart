import { ActionTypes } from "../contants/actions-types";
import ProductService from '../../services/product'
import { ContactlessOutlined } from "@material-ui/icons";
export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const checkUserAuth = (data) => {
  return {
    type: ActionTypes.USER_AUTH,
    payload: data,
  };
};
export const signUpUser = (data) => {
  return {
    type: ActionTypes.SIGNUP_USER,
    payload: data,
  };
};
export const getProductsList=(data)=>{
  return{
    type: ActionTypes.GET_PRODUCTS,  
    payload:data
  }
}
export const fetchProductList=()=>{
  return async(dispatch)=>{
    const productList= await ProductService.productList();
    dispatch(getProductsList(productList))
  }

}
