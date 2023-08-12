
import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timmer from './components/Timmer';

function App() {
  

  return (
    <div className="App">
      <Stopwatch/> 
      <Timmer/>

      <button>STOPWATCH</button>
      <button>TIMER</button>
    </div> 
  );
}

export default App;
