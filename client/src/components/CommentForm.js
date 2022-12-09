import React, { useState } from "react";

function CommentForm({ addNewComment, currentUser, expandComment, song }) {
  const [userId, setUserId] = useState(currentUser.id);
  const [songId, setSongId] = useState(song.id);
  const [newDescription, setNewDescription] = useState("");

  function userAddComment() {
    const newObj = {
      user_id: parseInt(userId),
      song_id: parseInt(songId),
      description: newDescription,
    };
    console.log(newObj);
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => addNewComment(data));
  }

  return (
    <div>
      {expandComment && (
        <div>
          <div className="field">
            <label
              type="text"
              name="user_id"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            ></label>
          </div>
          <div className="field">
            <div className="control">
              <input
                value={newDescription}
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
                className="inputs"
                type="text"
                placeholder="Enter comment here..."
              />
            </div>
          </div>
          <button className="primary-btn" onClick={userAddComment} type="submit">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
