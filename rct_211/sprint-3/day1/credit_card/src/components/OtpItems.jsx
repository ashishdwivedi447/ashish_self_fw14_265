import React from 'react'
import { forwardRef } from 'react'

export const OtpItems = forwardRef(({len,handleBackward,handleForward},ref) => {
    const handleKey = (e)=>{
        if(e.keyCode === 8){
            handleBackward(e);
        }
        else{
            handleForward(e);
        }
    }
  return (
    <div>
        <input type="text" maxLength={len} ref={ref} onKeyUp={handleKey} />
    </div>
  )
});
