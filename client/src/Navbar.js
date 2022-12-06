import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar({ updateUser, currentUser }) {

    return (
        <div className="logoutButtonDiv">
            <NavLink  className="nav" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/all-songs" >All Songs</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/my-account" >My Account</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/login" >Login/Signup</NavLink>
        </div>
    )
}

export default Navbar;