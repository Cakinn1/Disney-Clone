import React from "react";
import LoginComponents from "./LoginComponents";
import Nav from "./Nav";
function Password() {
  return (
    <>
      <Nav login="Log In" />
      <LoginComponents
        steps="Step 2 of 3"
        title="Create a password"
        para="You will use this email and password to log into your Disney+ account to watch your favourite shows and movies."
        placeholder="Password"
        type="password"
        bluebutton="continue"
        passwordPara="Use a minimum of 6 charaters (case sensitive) with at least one number or special character."
        emailAdressLogin="You'll be using this email address to log in:"
        destination="/"
      />
    </>
  );
}

export default Password;
