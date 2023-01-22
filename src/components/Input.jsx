import React, { useState } from "react";
import validator from "validator";

const Input = () => {
  const [emailError, setEmailError] = useState("");
  // const [emailIsEmpty, setEmailIsEmpty] = useState("");

  // const validate = () => {
  //   return emailIsEmpty.length;
  // };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError(`Please enter valid Email!`);
    }
  };

  return (
    <>
      <form
        className="w-80 flex flex-col gap-3  md:flex-row md:w-full md:gap-4 justify-center "
        name="contact"
        action="/contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className=" flex flex-col">
          <input
            className=" px-4 py-3 text-sm leading-tight text-gray-700 border rounded-full shadow appearance-none focus:outline-[#C2D3FF] focus:shadow-outline md:w-80 placeholder-[#C2D3FF]"
            name="email"
            type="email"
            placeholder="Enter Email Address..."
            required
            onChange={(e) => validateEmail(e)}
          />
          <p className="text-[#FFC2C8] text-sm mt-2">{emailError}</p>
        </div>
        <div>
          <button
            className="w-full px-4 py-2  text-white bg-[#4278FF] rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline md:text-base"
            type="submit"
          >
            Notify me
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
