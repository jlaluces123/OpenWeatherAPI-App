import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from "react-router-dom";

import Home from "./components/Home/index.js";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.js";

function App() {
  return (
    <div className="App">
      <main className = "container">
        <Route exact path = "/" component = {Home} />
        <Route path = "/weather/:id" component = {CurrentWeather} />
      </main>
    </div>
  );
}

export default App;
