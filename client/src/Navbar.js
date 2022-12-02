import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar({ updateUser, currentUser }) {
    const history = useHistory()

    const handleLogout = () => {
        fetch(`/logout`, {
            method:"DELETE"
        })
        .then(res =>{
            if(res.ok){
            updateUser(false)
            history.push("./login")
            }
        })
    }

    return (
        <div className="logoutButtonDiv">
            { currentUser ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null }
            <NavLink  className="nav" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/my-favorite-songs" >My Favorite Songs</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/my-account" >My Account</NavLink>
            <NavLink  className="nav" style={{ marginRight: "10px" }} to="/login" >Login/Signup</NavLink>
        </div>
    )
}

export default Navbar;