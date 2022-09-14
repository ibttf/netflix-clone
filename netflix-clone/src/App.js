import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import MyList from "./MyList";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div id="App">
      <Navbar> </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
