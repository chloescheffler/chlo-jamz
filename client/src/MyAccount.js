import React from "react";

function MyAccount({ user_profile, currentUser }) {

    console.log(user_profile)
      
    if  (currentUser) {
    return (
        <div> 
            <img src={currentUser.profile_pic_url} alt="User profile pic" />
            <h1> 
                Welcome, {currentUser.user_name} !
            </h1>
            <h2>
                {currentUser.date_of_birth}
            </h2>
            <h2>
                {currentUser.age}
            </h2>
            <h2>
                {currentUser.pronouns}
            </h2>
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