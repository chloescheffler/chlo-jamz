import React, { useState, useEffect } from "react";
import RenderVideo from "./RenderVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

function Home({ addNewComment, setFetchedData, updateUser, currentUser, comments, songs, setSongs }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("")

  const dropdownButton = 
    <select onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value={genres}>Select genre...</option>
      {
        genres.map((genre) => 
          <option key={genre.id}>{genre.name}</option> )
      }
    </select>;

  useEffect(() => {
    fetch("/genres")
      .then((r) => r.json())
      .then((genre) => {
        setGenres(genre);
      });
  }, []);

  // FOR DROPDOWN BUTTON, FETCHING SPECIFIC GENRE
  useEffect(() => {
    fetch(`/songs?genre=${selectedGenre}`)
      .then(res => res.json())
      .then(data => setSongs(data))
  }, [selectedGenre])

  return (
    <div>
      <div className="has-text-centered">
        Hello {currentUser.user_name}!
      </div>
      {dropdownButton}
      <Carousel showArrows={true} showThumbs={false}>
        {
          songs.map((song) => ( 
          <RenderVideo song={song} key={song.id} comments={comments} setFetchedData={setFetchedData} 
          currentUser={currentUser} addNewComment={addNewComment}/>
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
