import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#0e0b14]  flex flex-col items-center text-center">
      <Link to="/">
        <img className="w-20 h-20" src="/images/logo.svg" alt="" />
      </Link>

      <div className="text-[#F9F9F9] space-x-4 text-[12px] font-thin cursor-pointer ">
        <Link to="/" /> Privacy Policy
        <Link to="/" /> Subscriber Agreement
        <Link to="/" /> Collection Statement
        <Link to="/" /> Help
        <Link to="/" /> Supported Devices
        <Link to="/" /> About Us
        <Link to="/" /> Interest based Ads
      </div>
      <div className="text-white">
        <p className="text-[#CACACA] text-[12px] font-thin py-[24px]">
          &copy; Cakin. all rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
