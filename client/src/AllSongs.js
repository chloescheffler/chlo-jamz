import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";

function AllSongs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch(`/songs?no-limit=true`)
      .then(res => res.json())
      .then(data => setSongs(data))
  }, [])

  const displaySongCard = songs.map((song) => {
    return <SongCard {...song} key={song.id} />;
  })

    return (
        <div className="songCards">
          <ul> {displaySongCard} </ul>
        </div>
    )
}

export default AllSongs;