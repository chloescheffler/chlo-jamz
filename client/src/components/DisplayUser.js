import React from "react";

function DisplayUser({ profile }) {
    return (
        <div>
            <h1 className="profile-username">{profile.user_name}</h1>
        </div>
    )
}

export default DisplayUser;