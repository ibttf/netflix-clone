import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import MyListPage from "./MyListPage";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

  return (
    <div id="App">
      <Navbar> </Navbar>
      <Switch>
        <Route exact path="/">
          <Home apiKey={apiKey} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/search">
          <Search apiKey={apiKey}/>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
