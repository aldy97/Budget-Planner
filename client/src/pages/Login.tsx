import React, { useState } from "react";
import LoginRegToggler from "../components/Login/LoginRegToggler";
import LoginForm from "../components/Login/LoginForm";
import RegisterFrom from "../components/Login/RegisterForm";

function Login() {
  const [isAtLogin, setIsAtLogin] = useState<boolean>(true);

  const toogle = () => {
    if (isAtLogin) {
      setIsAtLogin(false);
    } else {
      setIsAtLogin(true);
    }
  };

  return (
    <>
      <LoginRegToggler atLogin={isAtLogin} toogle={toogle}></LoginRegToggler>
      {isAtLogin && <LoginForm></LoginForm>}
      {!isAtLogin && <RegisterFrom></RegisterFrom>}
    </>
  );
}

export default Login;
