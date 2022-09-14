import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import MyListPage from "./MyListPage";
import Search from "./Search";
import Footer from "./Footer";
import Moreinfo from "./Moreinfo";

function App() {
  return (
    <div id="App">
      <Navbar> </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/moreinfo">
    <Moreinfo/>
        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
