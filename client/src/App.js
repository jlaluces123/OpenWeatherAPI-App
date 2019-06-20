import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from "react-router-dom";

import Home from "./components/Home/index.js";

function App() {
  return (
    <div className="App">
      <main className = "container">
        <Route exact path = "/" component = {Home} />
      </main>
    </div>
  );
}

export default App;
