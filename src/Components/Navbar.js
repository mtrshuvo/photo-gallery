import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
        <li><NavLink to="/nature">Nature</NavLink></li>
      </ul>
    </nav>
    )
}
