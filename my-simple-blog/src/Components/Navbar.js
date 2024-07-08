import React from "react";
import {Link} from "react-router-dom";

const Navbar =()=>{
    return(
        <nav>
            <ul>
                <li><Link to="/">메인으로 이동하기</Link></li>
                <li><Link to="/todoList">todoList</Link></li>
                <li><Link to="/tic-tac-toe">tic-tac-toe</Link></li>
            </ul>
        </nav>   
    )
}
export default Navbar;