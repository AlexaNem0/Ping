import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mb-6">
      <div className=" flex justify-center gap-4 mb-4">
        <a
          className="text-[#4278FF]"
          href="https://www.facebook.com/"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a
          className="text-[#4278FF]"
          href="https://www.facebook.com/"
          target="blank"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          className="text-[#4278FF]"
          href="https://www.facebook.com/"
          target="blank"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm ">&copy; Copyright Ping. All rights reserved.</p>
    </div>
  );
};

export default Footer;
