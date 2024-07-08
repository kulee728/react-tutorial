import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul>
                {/* 
                Html 에서 <a href="/">Home</a>와 같다.
                */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;