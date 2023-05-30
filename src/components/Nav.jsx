import React from "react";
import { Link } from "react-router-dom";

function Nav({ login }) {
  return (
    <div className="bg-[#1A1D29] h-16 flex items-center justify-between px-6 ">
      <Link to="/">
        <img
          className="cursor-pointer"
          src="/images/logo.svg"
          alt=""
          width="80"
          heigh="80"
        />
      </Link>
      <p className="font-semibold text-white text-[15px]">{login}</p>
    </div>
  );
}

export default Nav;
