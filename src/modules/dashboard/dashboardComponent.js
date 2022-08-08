import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Body from "../body/Body";
import styled from "styled-components";
import Utility from "../../utility";
import AddProductComponent from "../addProduct";
import Products from "../products";
import AboutUs from "../about/About";
import Login from "../login/Login";
import SignUp from "../SignUp";
import LoginBackgroundImage from "../../static/images/login_background.png";
const DashbordContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: ${(props) =>
    props.isLoginPage ? `url(${LoginBackgroundImage})` : ""};
`;

const BodyContainer = () => {
  console.log("is menu active  /products ==>",Utility.isMenuActive("/home"))
  console.log("is menu active  /addProduct ==>",Utility.isMenuActive("/addProduct"))
  return (
    <>
      {Utility.isMenuActive("/home") && <Body />}
      {Utility.isMenuActive("/addProduct") && <AddProductComponent />}
      {Utility.isMenuActive("/products") && <Products />}
      {Utility.isMenuActive("/aboutUs") && <AboutUs />}
      {Utility.isMenuActive("/login") && <Login />}
      {Utility.isMenuActive("/signup") && <SignUp />}
    </>
  );
};

const DashboardComponent = (props) => {
  return (
    <DashbordContainer>
      <SideBar {...props} />
      <HomeContainer
        isLoginPage={
          Utility.isMenuActive("/login") || Utility.isMenuActive("/signup")
        }
      >
        <Header {...props} />
        <BodyContainer {...props} />
      </HomeContainer>
    </DashbordContainer>
  );
};
export default DashboardComponent;
