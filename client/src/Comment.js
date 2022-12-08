import React, { useState } from "react";

function Comment({ comment, onDelete, handleEditComment }) {
  const [isForm, setIsForm] = useState(false);
  const [description, setDescription] = useState(comment.description);

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

  function userUpdateRental(e) {
    e.preventDefault()
    fetch(`/comments/${comment.id}`, {
      method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({description: description})
      })
          .then(response => response.json())
          .then(data => {
            handleEditComment(data)
            handleForm()
          });
        }

        function handleForm(){
          setIsForm(prev => !prev)
        }
  
  return (
    <div>
      { !isForm ?
        comment.description
        : <form onSubmit={userUpdateRental}>
            <input type="text" defaultValue={comment.description} onChange={(e) => setDescription(e.target.value)}></input>
            <button type="submit" >Submit</button>
          </form>
      }
      <br></br>
      {comment.user.user_name}
      <div className="field is-grouped is-grouped-centered">
      <p className="control">
      <button onClick={handleDelete}> X </button>
      <button className="primary-btn" onClick={handleForm}>{!isForm ? "Edit Comment" : "Close Comment"}</button>
      </p>
      </div>
    </div>
  );
}

export default Comment;
