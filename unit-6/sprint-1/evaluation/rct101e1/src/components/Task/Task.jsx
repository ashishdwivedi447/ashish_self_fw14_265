import React, { useState } from "react";
import styles from "./task.module.css";
import tasks from "../../data/tasks.json";
import Counter from "../Counter/Counter"

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
<>
    {tasks.map((e)=>(
      <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      
   <div data-cy="task-text">{e.text}</div>
    
     
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button">x</button>
    </li>
    ))}
  
  </>
  );
};

export default Task;
