import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function RenderVideo({ song, setFetchedData, currentUser, addNewComment }) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(true);
    const [expandComment, setExpandComment] = useState(false);

    function handleShowComments() {
      setShowComments((showComments) => !showComments);
    }

    useEffect(() => {
      fetch(`/songs/${song.id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    function handleDelete(id) {
        const updatedObj = comments.filter(comment => comment.id !== id)
        setComments(updatedObj)
    }

    const displayComments = comments?.map((comment) => {
        return <Comment comment={comment} key={comment.id} onDelete={handleDelete} setFetchedData={setFetchedData}/>
    })

    return (
            <div> 
                <iframe 
                width="0"
                height="600"
                src={song.url}
                alt="youtube video" 
                title="Youtube Video" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
                <button onClick={handleShowComments}>
                    {showComments ? "Hide Comments" : "Show Comments"}
                </button>
                <h2>{showComments ? `${comments.length} Comments` : null}</h2>
                {showComments ? 
                <div className="comment-form">
                    {displayComments} 
                </div> : null}
                { showComments ? <div>
                    <button onClick={()=> setExpandComment(!expandComment)}>Add Comment</button>
                    <CommentForm song={song} comments={comments} setFetchedData={setFetchedData} 
                    currentUser={currentUser} expandComment={expandComment} addNewComment={addNewComment} />
                    </div> : null
                }
            </div>
    )
}

export default RenderVideo;