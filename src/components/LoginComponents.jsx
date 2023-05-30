import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

function LoginComponents({
  title,
  para,
  NewToDisney,
  SignUp,
  bluebutton,
  steps,
  destination,
  placeholder,
  type,
  passwordPara,
  emailAdressLogin
}) {
  const [showIcon, setShowIcon] = useState(false);

  function toggleIcon() {
    setShowIcon(!showIcon);
  }

  return (
    <div className="border-t border-gray-700 bg-[#1A1D29] login__Height">
      <div className="pt-6 flex flex-col justify-center items-center ">
        <div className="w-[380px]">
          <p className="uppercase text-[#CACACA] text-[10px]">{steps}</p>
          <h1 className="text-white text-2xl ">{title}</h1>
          <p className="pt-2 text-[#F9F9F9] text-sm font-thin pb-6">{para}</p>
          <div className="relative ">
            <input
              type={type}
              placeholder={placeholder}
              className="w-[100%] py-[10px] px-[12px]
            outline-none caret-[blue-500]∫
            bg-[#F9F9F91A] rounded-sm text-white placeholder:text-1xlg
            "
            />
            {showIcon ? (
              <EyeIcon
                onClick={toggleIcon}
                className="absolute top-0 right-0 h-10 w-5 flex items-center mr-2 text-white cursor-pointer"
              />
            ) : (
              <EyeSlashIcon
                onClick={toggleIcon}
                className="absolute top-0 right-0 h-10 w-5 flex items-center mr-2 text-white cursor-pointer"
              />
            )}
            <p className="text-[#CACACA] text-[12px] mt-2">{passwordPara}</p>
          </div>
          <div className=" text-white mt-6 pl-3 border-l-2  ">
            <p className="text-[#A8A9AD] text-[15px]">{emailAdressLogin}</p>
            {/* <p>will be dynamic</p> */}
          </div>
          <div className="pt-6">
            <Link to={destination}>
              <button
                className="text-white w-[100%]  bg-[#0072DA] py-[12px] px-[24px] uppercase
              tracking-widest rounded-sm hover:bg-blue-500"
              >
                {bluebutton}
              </button>
            </Link>
          </div>
          <div>
            <p className="text-[#CACACA] pt-[24px] font-thin text-[15px]">
              {NewToDisney}
              <Link to="/signup">
                <button className="text-[#F9F9F9] pl-2 hover:text-blue-400 hover:underline transition-all ease-in-out duration-300">
                  {SignUp}
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponents;
