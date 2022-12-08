import React from "react";

function SongCard({ name, artist, album_url }) {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <img src={album_url} alt="album pic" />
        </div>
        <div class="card-body">
          <h4>
            <b>
              {name}
              <br></br>
              {artist}
            </b>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
