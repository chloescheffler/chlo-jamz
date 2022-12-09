import React from "react";
import moment from "moment";

function MyAccount({ user_profile, currentUser }) {

    console.log(user_profile)
      
    if  (currentUser) {
    return (
        <div className="headshot-border"> 
            <img className="profile-pic-img" src={currentUser.profile_pic_url} alt="User profile pic" />
            <div className="user-info">
            <h1> 
                Username: {currentUser.user_name}
            </h1>
            <h2>
                DOB: {moment(currentUser.date_of_birth).format("MM/DD/YYYY")}
            </h2>
            <h2>
                Age: {currentUser.age}
            </h2>
            <h2>
                Pronouns: {currentUser.pronouns}
            </h2>
            <h3>
                Bio: {currentUser.bio}
            </h3>
            </div>
        </div>
    )
    } else {
        return null
    }
}

export default MyAccount;