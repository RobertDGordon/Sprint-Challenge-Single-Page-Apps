import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}></Route>
      <Route path='/characters-list' component={CharacterList}></Route>
      <Route path='/locations-list' component={LocationsList}></Route>
    </main>
  );
}
