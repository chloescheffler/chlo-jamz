import React from "react";

function Comment({ comment }) {
  const { description, user } = comment;

  // const displayUserComments = comments.filter((comment) => comment.user_id === user_id)

  // const userCommentsMap = displayUserComments.map((userComments) => userComments.user )

  // const userNameMap = userCommentsMap.map((user) => user.comments.user_name)
//   console.log(comment);

  return (
    <div>
      {description}
      <br></br>
      {user.user_name}
    </div>
  );
}

export default Comment;
