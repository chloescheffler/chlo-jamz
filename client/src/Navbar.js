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
            <button className="button button-1 is-normal px-5 mr-6">
                <NavLink  className="nav" exact to="/" >Home</NavLink>
            </button>
            <button className="button button-1 is-normal px-5 mr-6">
                <NavLink  className="nav" exact to="/about-creator" >About Creator</NavLink>
            </button>
            <button className="button button-1 is-normal px-5 mr-6">
                <NavLink  className="nav" exact to="/all-songs" >All Songs</NavLink>
            </button>
            <button className="button button-1 is-normal px-5 mr-6">
                <NavLink  className="nav" exact to="/my-account" >My Account</NavLink>
            </button>
            <button className="button button-1 is-normal px-5 mr-6">
                <NavLink  className="nav" exact to="/login" >Login/Signup</NavLink>
            </button>
            { currentUser ? <button className="button button-1 px-5 mx-5" onClick={handleLogout}>Logout</button> : null }
        </div>
    )
}

export default Navbar;