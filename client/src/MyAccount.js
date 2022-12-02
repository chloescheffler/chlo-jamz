import React from "react";

function MyAccount({ user_profile, currentUser }) {

    console.log(user_profile)
      
    if  (currentUser) {
    return (
        <div> 
            <h1> 
                Welcome, {currentUser.user_name} !
            </h1>
            <img src={currentUser.profile_pic_url} alt="User profile pic" />
            <h3>
                {currentUser.bio}
            </h3>
        </div>
    )
    } else {
        return null
    }
}

export default MyAccount;