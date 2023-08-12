import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <div>TodoList</div>
      <span> You have<b data-cy="header-remaining-task">{unCompletedTask}</b> of<b data-cy="header-total-task">{totalTask}</b>Taks Remaining</span>
      {/* <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b> */}
    </div>
  );
};

export default TaskHeader;
