import React from "react";

function SongCard({ name, artist, album_url }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={album_url} alt="album" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">
            {name}, {artist}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
