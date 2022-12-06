import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function RenderVideo({ song }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
      fetch(`/songs/${song.id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const displayComments = comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />
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
                {displayComments}
            </div>
    )
}

export default RenderVideo;