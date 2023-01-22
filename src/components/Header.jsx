import React from "react";

const Header = () => {
  return (
    <div className="  flex flex-col gap-2 mt-6">
      <h1 className=" font-bold text-5xl  ">
        PING<span className="text-[#4278FF]">.</span>
      </h1>
      <h2 className="text-[#969696] text-3xl md:text-5xl">
        We are launching <span className="font-bold text-black ">soon!</span>
      </h2>
      <p>Subscribe and get notified</p>
    </div>
  );
};

export default Header;
