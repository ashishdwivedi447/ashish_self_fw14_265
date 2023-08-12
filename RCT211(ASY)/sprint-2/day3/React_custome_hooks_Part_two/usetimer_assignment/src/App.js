import logo from './logo.svg';
import './App.css';
import useTimer from "./Hooks/useTimer"
import downtimer from "./Hooks/downwatch"

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function App() {
  const {timer,start,stop,reset}=useTimer(1000)
  const {watch}=downtimer(20)
  return (
    <div className="App">
    <h3>{msToTime(timer)}</h3>
    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
    <button onClick={reset}>reset</button>
   <br></br>
   <br></br>
   <br></br>
  <h3>the timer is:{watch}</h3>
    </div>
  );
}

export default App;


