import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="bg-[#1A1D29] h-16 flex items-center px-6 ">
        <Link to="/">
          <img
            className="cursor-pointer"
            src="/images/logo.svg"
            alt=""
            width="80"
            heigh="80"
          />
        </Link>
      </div>
      <div className="border-t border-gray-700 bg-[#1A1D29] login__Height">
        <div className="pt-6 flex flex-col justify-center items-center ">
          <div className="w-[380px]">
            <h1 className="text-white text-2xl ">Log in with your email</h1>
            <p className="pt-2 text-[#F9F9F9] text-sm font-thin pb-6">
              You will use this email and password to log into your Disney+
              account to watch your favourite shows and movies.
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="w-[100%] py-[10px] px-[12px]
              outline-none caret-[blue-500]
              bg-[#F9F9F91A] rounded-sm text-white placeholder:text-1xlg
             "
            />
            <div className="pt-6">
              <button
                className="text-white w-[100%] bg-[#0072DA] py-[12px] px-[24px] uppercase
              tracking-widest rounded-sm hover:bg-blue-500"
              >
                Continue
              </button>
            </div>
            <div>
              <p className="text-[#CACACA] pt-[24px] font-thin text-[15px]">
                New to Disney+?
                <button className="text-[#F9F9F9] pl-2 hover:text-blue-400 hover:underline transition-all ease-in-out duration-300">
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
