import React, { useState, useEffect } from "react";
import RenderVideo from "./RenderVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

function Home({ updateUser, currentUser, comments, songs }) {
  const [genres, setGenres] = useState([])
  const [randomSongs, setRandomSongs] = useState([])
 
  useEffect(() => {
    fetch("/genres")
    .then((r) => r.json())
    .then((genre) => {
    setGenres(genre)
    randomArray(songs)
    });
  }, [songs]);

  function randomArray(songs) {
    let newArray = [];
    for (let i = 0; i < 10; i = newArray.length) {
      let newItem = songs[Math.floor(Math.random() * songs.length)];
      if (newArray.map((a) => a.id).includes(newItem.id)) {
        return null;
      } else {
        newArray.push(newItem);
      }
    }
    console.log(newArray)
    setRandomSongs(newArray);
  }

  if (!currentUser) {
    return <h1> Loading... </h1>;
  }

  return (
    <div>
      Hello {currentUser.user_name}!
      {/* <div className="dropdown is-up">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu7"
          >
            <span>Dropup button</span>
            <span className="icon is-small">
              <i className="fas fa-angle-up" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu7" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>
                You can add the <code>is-up</code> modifier to have a dropdown
                menu that appears above the dropdown button.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* {displayGenres} */}
      <Carousel autoPlay showArrows={true} showThumbs={false}>
        {/* {
            songs.map((song) => ( 
            <RenderVideo song={song} key={song.id} comments={comments} />
            ))
        } */}
        {randomSongs}
      </Carousel>
      {/* <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <Navbar updateUser={updateUser} currentUser={currentUser} />
            </p>
        </div>
      </footer> */}
    </div>
    
  );
}

export default Home;
