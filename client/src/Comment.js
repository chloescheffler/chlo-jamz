import React, { useState } from "react";
import { Link } from "react-router-dom";

function Comment({ comment, onDelete }) {
  const [fetchedData, setFetchedData] = useState(false)

  function handleDelete(){
    fetch(`/comments/${comment.id}`,{
        method: 'DELETE',
})
  .then((r) => {
    if (r.ok){
        onDelete(comment.id)
    }
  })
}

  function userAddComment(){
    setFetchedData(true)
    const newObj = {
      user_id: comment.user_id,
      song_id: comment.song_id,
      description: comment.description
    }
    console.log(newObj)
    const requestOptions = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
    };
    fetch('/comments', requestOptions)
        .then(response => response.json())
        .then(data => setFetchedData(false));
    }

  function userUpdateRental(){
    setFetchedData(true)
    const requestOptions = {
      method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
      };
        fetch(`/comments/${comment.id}`, requestOptions)
          .then(response => response.json())
          .then(data => setFetchedData(false));
        }

  return (
    <div>
      {comment.description}
      <br></br>
      {comment.user.user_name}
      <div class="field is-grouped is-grouped-centered">
      <p class="control">
      <button onClick={handleDelete}> X </button>
      <button className="editButton" onClick={userUpdateRental}>
        <Link to={`/comments/${comment.id}`}>Edit</Link>
      </button>
      <button onClick={userAddComment}>
        <Link to={`/comments/${comment.id}`}>Add Comment</Link>
      </button>
      </p>
      </div>
    </div>
  );
}

export default Comment;
