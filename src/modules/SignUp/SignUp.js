import React from "react";
import styled from "styled-components";
import { Person, Email, Lock } from "@material-ui/icons";

const UserSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  width: 300px;
  height: 400px;
  margin-left: 600px;
  margin-top: 140px;
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
const SignUpButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: grey;
  bsckgroud-color: rgba(255, 255, 255, 0.2);
  font-size: 16px;
  font-weight: 12px;
  &:hover {
    cursor: pointer;
  }
`;
const SignUpHeading = styled.div`
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
const UsernameDiv = styled(UserEmailDiv)``;
const UserIcon = styled.div`
  margin-top: 6px;
`;
const PasswordIcon = styled(UserIcon)``;

const SignUp=(props)=> {
  const {setUserName,setEmail,setPhoneNumber,setPassword,submitForm} = props;
  return (
    <UserSignUpContainer>
      <SignUpHeading>SignUp Form</SignUpHeading>
      <UsernameDiv>
        <UserIcon>
          <Person />
        </UserIcon>
        <UserEmail
          id="userName"
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Username"
        />
      </UsernameDiv>
      <UserEmailDiv>
        <UserIcon>
          <Email />
        </UserIcon>
        <UserEmail
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
      </UserEmailDiv>
      <UserPasswordDiv>
        <PasswordIcon>
          <Lock />
        </PasswordIcon>
        <UserPassword
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
        />
      </UserPasswordDiv>
      <UserPasswordDiv>
        <PasswordIcon>
          <Lock />
        </PasswordIcon>
        <UserPassword
          id="phoneNumber"
          onChange={(event) => setPhoneNumber(event.target.value)}
          type="number"
          placeholder="Phone Number"
        />
      </UserPasswordDiv>

      <SignUpButton
        onClick={() => {
          submitForm();
        }}
      >
        SignUp
      </SignUpButton>
    </UserSignUpContainer>
  );
}

export default SignUp;
