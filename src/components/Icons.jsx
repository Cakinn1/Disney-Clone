import React from "react";

function Icons({ image, title, para }) {
  return (
    <div className="flex flex-col justify-center text-center w-full h-1/3 mt-">
      <img src={image} alt="" />
      <p className="text-[#F9F9F9] font-bold text-[24px] my-4">{title}</p>
      <p className="text-[#C0C0C0] text-[20px]">{para}</p>
    </div>
  );
}

export default Icons;
