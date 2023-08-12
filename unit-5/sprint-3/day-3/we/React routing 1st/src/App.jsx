
import './App.css'
import {Home} from "./components/Home"
import {About} from "./components/About"
import{Routes,Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {UsersList} from "./components/UsersList"
import{Userdetails} from "./components/Userdetails"


function App() {
  

  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/users" element={<UsersList/>}></Route>
     <Route path="/users/:id" element ={<Userdetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App

// Routes is used to wrap up route
//Route is used on which path which element has to show
