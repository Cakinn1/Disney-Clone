import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginComponents from "./LoginComponents";
import Nav from "./Nav";

function Signup() {
  return (
    <>
      <Nav login="Log In" />
      <LoginComponents
        steps={" step 1 of 3"}
        title={"Enter your email address"}
        para={
          "You will use this email and password to log into your Disney+ account to watch your favourite shows and movies."
        }
        destination="/Password"
        bluebutton="Agree & Continue"
        placeholder="Email"
        type="email"
      />
    </>
  );
}

export default Signup;
