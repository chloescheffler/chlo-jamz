import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function RenderVideo({ song }) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(true);

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
        return <Comment comment={comment} key={comment.id} onDelete={handleDelete}/>
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
                    {showComments ? "Show Comments" : "Hide Comments"}
                </button>
                <h2>{showComments ? `${comments.length} Comments` : null}</h2>
                {showComments ? displayComments : null}
            </div>
    )
}

export default RenderVideo;