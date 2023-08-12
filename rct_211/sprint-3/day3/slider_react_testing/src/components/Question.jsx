import React from 'react'
import '../App.css';
export const Question = ({q,ans,id,current}) => {
  return (
    <div className={current==id?"selected":null}>
        <h4>Que-{q}</h4>
        <p>Ans-{ans}</p>
    </div>
  )
}
