import React from "react";

function SongCard({ name, artist, album_url }) {
  return (
    <div className="container" class="is-inline-flex">
      <div className="card">
        <div className="card-header">
          <img src={album_url} alt="album pic" />
        </div>
        <div className="card-body">
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
