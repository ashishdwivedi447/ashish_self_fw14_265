import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const nonCompleted=useSelector(state=>state.todos.nonCompleted);
  const todos=useSelector(state=>state.todos.todos,(pre,cur)=>{
    return false;
  });
  console.log(nonCompleted)
  return (
    <div className={styles.navmain}>
 
      <div>
        <h2>TODO APP</h2>
      </div>
      <div >
        <Link  to="/" className={styles.go}> Home</Link>
        <Link to="/counter" className={styles.go}> counter</Link>
        <Link to="/todo" className={styles.go}>Create New Todo</Link>
      </div>
      <div>
        <h4>Noncompleted  {(nonCompleted)} Outof {todos.length}  </h4>
      </div>

    </div>
  );
};

export default Navbar;
