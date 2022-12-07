import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="logoutButtonDiv">
                <NavLink  className="nav" style={{ marginRight: "20px" }} exact to="/" >Home</NavLink>
                <NavLink  className="nav" style={{ marginRight: "20px" }} to="/all-songs" >All Songs</NavLink>
                <NavLink  className="nav" style={{ marginRight: "20px" }} to="/my-account" >My Account</NavLink>
                <NavLink  className="nav" style={{ marginRight: "20px" }} to="/login" >Login/Signup</NavLink>
        </div>
    )
}

export default Navbar;