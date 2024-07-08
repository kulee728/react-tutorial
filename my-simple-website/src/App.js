import logo from './logo.svg';
import './App.css';
import './'
import Game from './Component/Game';
import {Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Game2step from './Component/GameTwoStep'
import TodoList from './Component/TodoList';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/"     element={ <Home/> }/>
      <Route path="/game" element={ <Game/> }/>
      <Route path="/game2step" element={<Game2step/>}/>
      <Route path="/todolist" element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
