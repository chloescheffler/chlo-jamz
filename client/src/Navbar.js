import React from "react";
import { NavLink, useHistory } from "react-router-dom";

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
        <div className="buttons">
            <button className="button is-normal px-5 mx-6">
                <NavLink  className="nav" exact to="/" >Home</NavLink>
            </button>
            <button className="button is-normal px-5 mx-6">
                <NavLink  className="nav" exact to="/all-songs" >All Songs</NavLink>
            </button>
            <button className="button is-normal px-5 mx-6">
                <NavLink  className="nav" exact to="/my-account" >My Account</NavLink>
            </button>
            <button className="button is-normal px-5 mx-6">
                <NavLink  className="nav" exact to="/login" >Login/Signup</NavLink>
            </button>
            { currentUser ? <button className="button is-normal is-pulled-right px-5 mx-6" onClick={handleLogout}>Logout</button> : null }
        </div>
    )
}

export default Navbar;