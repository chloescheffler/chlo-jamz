import React from "react";
import SongCard from "./SongCard";

function MyFavSongs({ songs }) {

  const displaySongCard = songs.map((song) => {
    return <SongCard {...song} key={song.id} />;
  })

    return (
        <div className="songCard">
          <ul> {displaySongCard} </ul>
        </div>
    )
}

export default MyFavSongs;