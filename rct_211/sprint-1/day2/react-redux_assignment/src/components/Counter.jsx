import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "../redux/counter/counter.action";

const Counter = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.counter);

  const handleinc = () => {
    dispatch(add());
  };
  const handledec = () => {
    dispatch(sub());
  };
  return (
    <div>
      Counter :- {counter}
      <button onClick={handleinc}>incriment</button>
      <button onClick={handledec}> decriment</button>
    </div>
  );
};

export default Counter;
