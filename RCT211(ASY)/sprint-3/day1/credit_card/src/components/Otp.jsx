import React from 'react'
import propTypes from 'prop-types'
import { useState } from 'react'
import { OtpItems } from './OtpItems';
import { useRef } from 'react';
export const Otp = ({len,setOtp}) => {
    const[inputLength] = useState(new Array(len).fill(""));
    const inputRef = useRef([]);
    const[storeInput,setStoreInput] = useState(new Array(len).fill(""));
    const handleForward = (e,index)=>{
        storeInput[index]=e.target.value;
        if(e.target.value.length ===4 && index<len-1){
            inputRef.current[index+1].focus();
        }
        setOtp(storeInput.join(""));
    }
    const handleBackward = (e,index)=>{
        storeInput[index]=e.target.value;
        if(e.target.value.length ===0 && index>0){
            inputRef.current[index-1].focus();
        }
        setOtp(storeInput.join(""));
    }
    const handlePaste = (e)=>{
        e.preventDefault();
        let data = e.clipboardData
        .getData("text")
        .split("")
        .filter((item,index)=>index<16);
       
        for(var i=0;i<4;i++){
            if(i==0){
                let first = "";
                for(var j=0;j<4;j++){
                    first+=data[j];
                }
                inputRef.current[i].value=first;
                storeInput[i]=first;
            }
            else if(i==1){
                let second = "";
                for(var j=4;j<8;j++){
                    second+=data[j];
                }
                inputRef.current[i].value=second;
                storeInput[i]=second;
            }
            else if(i==2){
                let third = "";
                for(var j=8;j<12;j++){
                    third+=data[j];
                }
                inputRef.current[i].value=third;
                storeInput[i]=third;
            }
            else if(i==3){
                let fourth = "";
                for(var j=12;j<16;j++){
                    fourth+=data[j];
                }
                inputRef.current[i].value=fourth;
                storeInput[i]=fourth;
            }
        }
        inputRef.current[len-1].focus();
        setOtp(storeInput.join(""));
        console.log(data);
    }
  return (
    <div className='otp_container' onPaste={handlePaste}>
        {inputLength.map((ele,index)=><OtpItems key={index} 
        handleForward={(e)=>handleForward(e,index)}
        handleBackward={(e)=>handleBackward(e,index)}
        len={len} ref={(element)=>{
            inputRef.current[index]=element;
        }}/>)}
    </div>
  )
}
Otp.propTypes = {
    len:propTypes.number
}