import React from "react";
import moment from "moment";

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
                {moment(currentUser.date_of_birth).format("MM/DD/YYYY")}
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