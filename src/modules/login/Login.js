import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
const UserLoginContainer = styled.div`
  display: flex;
  flex-direction: column;


  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 15px;
  background: rgba(255, 255, 255, .2);
  border:2px solid rgba(255, 255, 255, .2);
  border-radius:8px;
  width: 300px;
  height:400px;
  margin-left:600px;
  margin-top:140px;
`;
const UserEmail = styled.input`
  border: none;
  background-color: none;
  padding: 8px;
  outline: none;
  margin: 4px;
  font-size: 14px;
`;
const UserPassword = styled.input`
  border: none;
  background-color: #ffffff;
  padding: 8px;
  outline: none;
  margin: 4px;
`;
const LoginButton = styled.button`
width:80px;
height:40px;
border-radius:4px;
border:2px solid rgba(255, 255, 255, .2);
color:grey;
bsckgroud-color:rgba(255, 255, 255, .2);
font-size:16px;
font-weight:12px;
&:hover{
  cursor:pointer;
}
`;
const LoginHeading = styled.div`
  font-size: 16px;
`;
const UserEmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border-radius: 4px;
  background-color: #ffffff;

  
`;
const UserPasswordDiv = styled(UserEmailDiv)``;
const UserIcon = styled.div`
  margin-top: 6px;
`;
const PasswordIcon = styled.div`
  margin-top: 6px;
`;
function Login() {
  return (
    <UserLoginContainer>
      <LoginHeading>Login Form</LoginHeading>
      <UserEmailDiv>
        <UserIcon>
          <PersonIcon />
        </UserIcon>
        <UserEmail type="email" placeholder="Email or Username" />
      </UserEmailDiv>
      <UserPasswordDiv>
        <PasswordIcon>
          <LockIcon />
        </PasswordIcon>
        <UserPassword type="password" placeholder="Password" />
      </UserPasswordDiv>

      <LoginButton>Login</LoginButton>
    </UserLoginContainer>
  );
}

export default Login;
