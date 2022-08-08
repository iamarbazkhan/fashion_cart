import React, { useState } from "react";
import { history } from "../../manager/history";
import { pathConstants } from "../../constants";
import sessionManager from "../../manager/sessionManager";
//Service
import signUpRequest from "../../services/signUp"

// Redux
import { connect } from "react-redux";
import SignUp from "./SignUp";
import {checkUserAuth} from '../../redux/actions/productActions'
import { useNavigate } from "react-router-dom";

// const mapStateToProps = (state) => {
//   return {
//     user: state,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setProductAction: (data) => {
//       dispatch(checkUserAuth(data));
//     },
//   };
// };

const UserSignUp=(props)=>{
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const history=useNavigate();
  const submitForm = async () => {
    const data = await signUpRequest.SignUpUser({
      userName:userName,
      email:email,
      password:password,
      phoneNumber:phoneNumber
    });
    if (!data.responseData.length) {
      alert("User already exist!!");
    } else {
      history(pathConstants.DASHBOARD_MENU.LOGIN);
    }
  };
  return (
    <SignUp
      setUserName={setUserName}
      setEmail={setEmail}
      setPassword={setPassword}
      setPhoneNumber={setPhoneNumber}
      submitForm={submitForm}
    />
  );
}

export default UserSignUp
