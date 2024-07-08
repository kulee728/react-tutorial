import logo from "./logo.svg";
import "./App.css";
import "./TicTacToe.css"
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import TodoList from "./Components/TodoList";
import TicTacToe from "./Components/TicTacToe";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/todoList" element={<TodoList/>}></Route>
        <Route path="/tic-tac-toe" element={<TicTacToe/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
