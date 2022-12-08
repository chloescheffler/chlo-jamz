import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import Signup from "./Signup"
import AboutCreator from "./AboutCreator"
import MyAccount from "./MyAccount"
import AllSongs from "./AllSongs"
import Navbar from "./Navbar"

function App() {
  const [user_profile, setUserProfile] = useState([])
  const [songs, setSongs] = useState([])
  const [comments, setComments] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [fetchedData, setFetchedData] = useState(false)
  
  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          // fetchUsers()
        });
      }
    })
  },[])

  useEffect(() => {
    fetch("/songs")
      .then((r) => r.json())
      .then((song) => {
        console.log(song)
        setSongs(song);
      });
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((profile) => {
        setUserProfile(profile);
      });
  }, []);

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then((comment) => {
        setComments(comment);
      });
  }, []);


  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="logo">Chlo-Jamz</h1>
        <Switch>
          <Route path="/all-songs">
            <AllSongs songs={songs} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
            <Signup updateUser={updateUser} />
          </Route>
          <Route path="/my-account">
            <MyAccount user_profile={user_profile} currentUser={currentUser}/>
          </Route>
          <Route path="/about-creator">
            <AboutCreator />
          </Route>
          { currentUser && <Route exact path="/">
            <Home updateUser={updateUser} currentUser={currentUser} comments={comments} songs={songs} 
            setSongs={setSongs} setFetchedData={setFetchedData}/>
          </Route> }
        </Switch>
        <footer className="footer">
          <div className="content has-text-centered">
            <Navbar updateUser={updateUser} currentUser={currentUser} />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
