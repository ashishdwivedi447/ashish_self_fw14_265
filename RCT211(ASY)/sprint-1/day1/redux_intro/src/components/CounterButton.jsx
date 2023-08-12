import React from 'react'
 import { handleincrement,handledecrement } from '../Redux/action'
 import { store } from '../Redux/store'

const CounterButton = () => {

  const {dispatch}=store;
  return (
    <div>
        <button onClick={()=> dispatch(handleincrement())}>increment</button>
        <button onClick={()=> dispatch(handledecrement())}>decrement</button>
    </div>
  )
}

export default CounterButton