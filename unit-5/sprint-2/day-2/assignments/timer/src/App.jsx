
import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
// import { Todos } from './components/Todos';

function App() {

  return ( 
      
   <div className="App">
     <h1>Timer</h1>
    <Counter/>
    </div> 
  );
}

export default App;
