import logo from './logo.svg';
import './App.css';
import useTimeout from './Hooks/useTimeout';

function App() {
  const ready=useTimeout(3000)
  return (
    <div className="App">
        <h3>Custome Hooks</h3>
      <div>{ready ? "completed" : "Not-completed"}</div>
    </div>
  );
}

export default App;
