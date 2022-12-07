import React, { useState } from "react";

function CommentForm({ comments, setFetchedData, currentUser }) {
    const [userId, setUserId] = useState("")
    const [songId, setSongId] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function userAddComment(){
        setFetchedData(true)
        const newObj = {
          user_id: parseInt(userId),
          song_id: parseInt(songId),
          description: newDescription
        }
        console.log(newObj)
        fetch('/comments', {
        method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObj)
        })
            .then(response => response.json())
            .then(data => console.log(data));
        }

    return (
        <div>
            <div className="field">
                <h4> Welcome <label type="text"  name="user_id" value={userId} onChange={(e)=>{setUserId(e.target.value)}}>{currentUser.user_name}, add a comment here!</label></h4>
            </div>
            
            <div className="field">
                <div className="control">
                    <input value={newDescription} onChange={(e)=>{setNewDescription(e.target.value)}} className="input" type="text" placeholder="Enter comment here..."/>
                </div>
            </div>
            <button onClick={userAddComment} input type="submit"> Add Comment </button>
        </div>
    )
}

export default CommentForm;