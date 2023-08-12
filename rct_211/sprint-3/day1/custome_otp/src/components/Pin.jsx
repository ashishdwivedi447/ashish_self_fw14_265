import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { PinItem } from "./PinItem";

export const Pin = ({ length, setOtp }) => {
  const inputRef = useRef([]);
  const [arrayLength] = useState(new Array(length).fill(""));
  const [otpvalue, setOtpValue] = useState(new Array(length).fill(""));
  const handleChange = (e, index) => {
    otpvalue[index] = e.target.value;
    if (e.target.value.length && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(otpvalue.join(""));
  };
  const handleBackspace = (e, index) => {
    otpvalue[index] = e.target.value;
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    setOtp(otpvalue.join(""));
  };
  const handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value,index)=>{
        arrayLength[index]=value;
        inputRef.current[index].value=value;
        inputRef.current[index].focus();
        otpvalue[index] = value;
    })  
    setOtp(otpvalue.join(""));
    console.log(data);
  };
  return (
    <div className="inputs" onPaste={handlePaste}>
      {arrayLength.map((e, index) => {
        return (
          <PinItem
            key={index}
            handleBackspace={(e) => handleBackspace(e, index)}
            handleChange={(e) => handleChange(e, index)}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
};
