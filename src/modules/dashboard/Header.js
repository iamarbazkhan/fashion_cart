import React from 'react';
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar"
const ProfileDiv = styled.div`
  position:absolute;
  right:0;
  margin:10px 20px 0px 0px;
`;
const Logo = styled.div`
 width:100%;
 margin-left:680px;
 margin-top:-20px;
`;
const HeaderDiv = styled.div`
display:flex;
flex-direction:row;
width:100%;
background-color:#f8f9f9;
border:solid 3px #e9f0ee;
`
const H4=styled.h4 `
font-size:30px;
align:center;
color:#8fb8aa
`
function Header() {
  return (
    <HeaderDiv>
    <Logo>
     <H4>AK Fashion Cart</H4> 
    </Logo>
      <ProfileDiv>
        <Avatar />
      </ProfileDiv>
    </HeaderDiv>

  )
}

export default Header;
