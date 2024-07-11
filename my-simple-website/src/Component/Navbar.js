import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return (
        <nav>
            <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/game">숫자 맞추기 게임</Link></li>
            <li> <Link to="/todolist">todoList</Link></li>
            <li> <Link to="/tictaptoe">Tic-Tap-Toe</Link></li>
            <li> <Link to="/typingtest">타자연습</Link></li>
            {/*<li> <Link to="/tictaptoe2">Tic-Tap-Toe2</Link></li>*/}
            </ul>
        </nav>

    )
}

export default Navbar;