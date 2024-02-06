import React from "react";
import img from './logo192.png';
import './App.css';



function Nav(){
    return(
        <div className="navbar">
        <img src={img} alt="logo"  width="40px"/>
        <ul className="item-list">
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
    )
}

export default Nav;