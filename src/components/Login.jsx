import React from "react";
import { Link } from "react-router-dom";
import LoginComponents from "./LoginComponents";
import Nav from "./Nav";

function Login() {
  return (
    <>
      <Nav />
      <LoginComponents
        title={"Log in with your email"}
        para={
          "You will use this email and password to log into your Disney+ account to watch your favourite shows and movies."
        }
        SignUp={"Sign Up"}
        NewToDisney={"New to Disney+? "}
        bluebutton={"Continue"}
        destination="/"
        placeholder="Email"
        type="email"
      />
    </>
  );
}

export default Login;
