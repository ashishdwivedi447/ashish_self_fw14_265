import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo/Todo";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Navbar from "./components/Navbar";
import SingleTodo from "./Pages/SingleTodo";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import { Requiredauth } from "./Required-auth/Requiredauth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <Requiredauth>
              <Home></Home>
            </Requiredauth>
          }
        ></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/counter" element={<Counter></Counter>}></Route>
        <Route path="/todos/:id" element={<SingleTodo></SingleTodo>}></Route>
        <Route path="/:id/edit" element={<Edit></Edit>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
