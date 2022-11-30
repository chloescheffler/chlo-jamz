import React from "react";

function Home({ currentUser }) {

    if (!currentUser) {
        return <h1> Loading... </h1>
    }

    return (
        <div> 
            Hello {currentUser.user_name}!
        </div>
    )
}

export default Home; 