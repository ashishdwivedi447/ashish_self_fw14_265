import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [counter,setCounter]=useState(1);
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{
        setCounter(counter+1);
      }}>+</button>
      <span data-cy="task-counter-value">{counter+1}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
        if(counter>0){
          setCounter(counter-1);
        }
      }}>-</button>
    </div>
  );
};

export default Counter;
