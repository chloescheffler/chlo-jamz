import React from "react";

function SongCard({ name, artist, album_url }) {
    return (
        <section class="container">
            <div class="columns is-flex-direction-column">
                <div class="column is-2">
                    <div class="card is-shady">
                        <div class="column card-image image is-4by3">
                            <img src={album_url} alt="album pic" class="modal-button" data-target="modal-image2"/>
                        </div>
                        <div class="column content">
                            <h4>{name}, {artist}</h4>
                            <span class="button is-link modal-button"               data-target="modal-image2">Image modal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SongCard;