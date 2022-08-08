import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AddBoxIcon from "@material-ui/icons/AddBox";
import InfoIcon from "@material-ui/icons/Info";
import { pathConstants } from "../../constants";
import Utility from "../../utility";
import { Link } from "react-router-dom";
const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150vh;
  min-width: 228px;
  text-align: center;
  background-color: #8fb8aa;
  border: solid 3px #799a8f;
  padding-left: 20px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const LinkName = styled.div`
  margin-top: 0px;
  cursor: pointer;
  font-weight: 34px;
  font-size: 18px;
  text-decoration: none;
  color: black;
`;
const Icon = styled.h1``;
const AllLinks = styled.div`
  margin: 20px 0px 0px 20px;
`;
function SideBar(props) {
  const {onMenuClick} = props
  return (
    <SideBarDiv>
      <Icon>Fashion Cart</Icon>
      <AllLinks>
        <LinkContainer>
          <HomeIcon />
          <LinkName onClick={()=>onMenuClick("/dashboard/home")}>Home</LinkName>
        </LinkContainer>
        <LinkContainer>
          <ShoppingBasketIcon />
          <LinkName onClick={()=>onMenuClick("/dashboard/products")}>Products</LinkName>
        </LinkContainer>
        <LinkContainer>
          <AddBoxIcon />
          <LinkName onClick={()=>onMenuClick("/dashboard/addProduct")}>Save Products</LinkName>
        </LinkContainer>
        <LinkContainer>
          <InfoIcon />
          <LinkName onClick={()=>onMenuClick("/dashboard/aboutUs")}>About Us</LinkName>
        </LinkContainer>
      </AllLinks>
    </SideBarDiv>
  );
}
export default SideBar;
