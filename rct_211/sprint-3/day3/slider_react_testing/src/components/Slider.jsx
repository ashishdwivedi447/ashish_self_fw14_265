import React, { useState } from 'react'
import { Question } from './Question'

export const Slider = ({que,current,handlebutton}) => {
  return (
    <div className='horizontal'>
        <button disabled={current==1?true:null} onClick={()=>handlebutton(-1)}>Prev</button>
       {que?.map((ele)=><Question current={current} id={ele.id} q={ele.question} ans={ele.answer} key={ele.id}/>)}
        <button disabled={current==que.length?true:null}  onClick={()=>handlebutton(1)}>Next</button>
    </div>
  )
}
