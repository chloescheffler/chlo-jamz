import React from "react";

function SongCard({ name, artist, album_url }) {
    return (
        <section className="container">
            <div className="columns is-flex-direction-column">
                <div className="column is-2">
                    <div className="card is-shady">
                        <div className="column card-image image is-4by3">
                            <img src={album_url} alt="album pic" className="modal-button" data-target="modal-image2"/>
                        </div>
                        <div className="column content">
                            <h4>{name}, {artist}</h4>
                            <span className="button is-link modal-button"               data-target="modal-image2">Image modal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SongCard;