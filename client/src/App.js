import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/my-favorite-songs">
            <h1>User's fav songs goes here</h1>
          </Route>
          <Route path="/log-in">
            <h1>Log-In goes here</h1>
          </Route>
          <Route path="/my-account">
            <h1>This is the user's account</h1>
          </Route>
          <Route path="/about-creator">
            <h1>This is about me </h1>
          </Route>
          <Route exact path="/">
            <h1>hello</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
