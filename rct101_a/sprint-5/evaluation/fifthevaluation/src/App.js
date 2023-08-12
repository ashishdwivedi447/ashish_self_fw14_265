import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './Page/Login';
import Home from "./Page/Home"
import Cart from "./Page/Cart"
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/cart/:id" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
