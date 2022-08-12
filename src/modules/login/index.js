import React, { useState } from "react";
import Login from "./Login";
import LoginService from "../../services/login";
import { useNavigate } from "react-router";
import { pathConstants } from "../../constants";
const UserLogin = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = async () => {
    const loginData = await LoginService.Login({
      email: email,
      password: password,
    });
    if (loginData.responseData.validateUser) {
      history(pathConstants.DASHBOARD_MENU.HOME);
    } else {
      alert("incorrect id and password");
    }
  };
  return (
    <Login onLogin={onLogin} setEmail={setEmail} setPassword={setPassword} />
  );
};

export default UserLogin;
