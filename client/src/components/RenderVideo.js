import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function RenderVideo({ song, setFetchedData, currentUser }) {
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

    function addNewComment(newCommentObj){
        setComments( prev => [...prev, newCommentObj])
    }

    function handleEditComment(commentObj) {
        const updatedComments = comments.map((comment) => {
            return comment.id === commentObj.id ? commentObj : comment
        })
        setComments(updatedComments)
    }

    const displayComments = comments?.map((comment) => {
        return <Comment handleEditComment={handleEditComment} comment={comment} key={comment.id} onDelete={handleDelete} setFetchedData={setFetchedData}/>
    })

    return (
            <div className="iframe-div">
                <iframe 
                width="100"
                height="600"
                src={song.url}
                alt="youtube video" 
                title="Youtube Video" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
                <div className="comment-form-div">
                <h1 className="comment-text"> {`${comments.length} Comments`} </h1>
                <button className="primary-btn" onClick={handleShowComments}>
                    {showComments ? "Hide Comments" : "Show Comments"}
                </button>
                <br></br>
                <br></br>
                {showComments ? 
                <div className="comment-form">
                    {displayComments} 
                </div> : null}
                <br></br>
                { showComments ? <div>
                    <button className="primary-btn" onClick={()=> setExpandComment(!expandComment)}>Add Comment</button>
                    <CommentForm song={song} comments={comments} setFetchedData={setFetchedData} 
                    currentUser={currentUser} expandComment={expandComment} addNewComment={addNewComment} />
                    </div> : null
                }
                </div>
            </div>
    )
}

export default RenderVideo;