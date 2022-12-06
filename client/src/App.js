import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import Signup from "./Signup"
import Navbar from "./Navbar"
import AboutCreator from "./AboutCreator"
import MyAccount from "./MyAccount"
import AllSongs from "./AllSongs"

function App() {
  const [user_profile, setUserProfile] = useState([])
  const [songs, setSongs] = useState([])
  const [comments, setComments] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

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
        setSongs(song);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/songs?genre=Rap")
  //     .then((r) => r.json())
  //     .then((song) => {
  //       setSongs(song);
  //     });
  // }, []);

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
  // console.log(currentUser)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Chlo-Jamz</h1>
          {/* <header className="App-header">
            <Navbar updateUser={updateUser} currentUser={currentUser}/>
          </header> */}
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
            <Home updateUser={updateUser} currentUser={currentUser} comments={comments} songs={songs}/>
          </Route> }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
