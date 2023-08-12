import './App.css';
import { Slider } from './components/Slider';
import { useState } from 'react';
import { que } from './data/que';
function App() {
  const[question,setQuestion] = useState(que);
    const[current,setCurrent]=useState(1);
   const handlebutton = (val)=>{
   
    if(current==que.length && val==1){

    }
    else if(current==1 && val==-1){

    }
    else{
        setCurrent(current+val);
    }
   }
  return (
    <div className="App">
     <Slider  que={question} current={current} handlebutton={(val)=>handlebutton(val)}/>
    </div>
  );
}

export default App;
