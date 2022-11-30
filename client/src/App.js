import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"

function App() {
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)


  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          
        });
      }
    })
  },[])

  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>
  console.log(currentUser)
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/my-favorite-songs">
            <h1>User's fav songs goes here</h1>
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/my-account">
            <h1>This is the user's account</h1>
          </Route>
          <Route path="/about-creator">
            <h1>This is about me </h1>
          </Route>
          { currentUser && <Route exact path="/">
           <Home currentUser={currentUser}/>
          </Route> }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
