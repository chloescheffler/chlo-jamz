import React, { useState, useEffect } from "react";
import RenderVideo from "./RenderVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function Home({ updateUser, currentUser, comments, songs }) {
  const [genres, setGenres] = useState([]);
  const [randomSongs, setRandomSongs] = useState([]);
  const history = useHistory()

  const handleLogout = () => {
    fetch(`/logout`, {
        method:"DELETE"
    })
    .then(res =>{
        if(res.ok){
        updateUser(false)
        history.push("./login")
        }
    })
  }

  useEffect(() => {
    fetch("/genres")
      .then((r) => r.json())
      .then((genre) => {
        setGenres(genre);
      });
  }, []);

  if (!currentUser) {
    return <h1> Loading... </h1>;
  }

  return (
    <div>
      { currentUser ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null }
      Hello {currentUser.user_name}!
      <div className="dropdown is-up">
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
      </div>
      <Carousel autoPlay showArrows={true} showThumbs={false}>
        {
            songs.map((song) => ( 
            <RenderVideo song={song} key={song.id} comments={comments} />
            ))
        }
      </Carousel>
      <footer className="footer">
        <div className="content has-text-centered">
                <Navbar updateUser={updateUser} currentUser={currentUser} />
        </div>
      </footer>
    </div>
  );
}

export default Home;
