import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import MyList from "./MyList";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  const [myList, setMyList] = useState([])

  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

  function handleAddMyList (e) {
    
  }

  return (
    <div id="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home apiKey={apiKey} setMyList={setMyList} />
        </Route>
        <Route exact path="/mylist">
          <MyList myList={myList} />
        </Route>
        <Route>
          <Search exact path="/search" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
