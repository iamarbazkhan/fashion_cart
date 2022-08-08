import React,{useEffect} from "react";
import DashboardComponent from "./dashboardComponent";
import ProductService from '../../services/product'
import {connect} from 'react-redux';
import {fetchProductList} from '../../redux/actions/productActions'
import {useNavigate} from 'react-router-dom'

const mapDispatchToProps=(dispatch)=>{
return {getProductListAction:()=>{
  dispatch(fetchProductList())
}}
}

const Dashboard = (props) => {
  const {getProductListAction}= props
  const history=useNavigate();
  useEffect(() =>{ 
     getProductListAction()
  },[])
  const onMenuClick = (activeMenu) => {
    history(activeMenu);
  };

  return <DashboardComponent onMenuClick={onMenuClick} />;
};

export default connect(undefined, mapDispatchToProps)(Dashboard);
