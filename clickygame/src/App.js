import React, { Component } from 'react';
// import logo from './logo.svg';
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Jumbotron from './components/Jumbotron';
// import friends from "./friends.json";
import Game from './components/Game';
import './App.css';

// <div className="App">
// <header className="App-header">
//   {/* <img src={logo} className="App-logo" alt="logo" /> */}
//   <h1 className="App-title">Clicky Game</h1>
// </header>
// <p className="App-intro">
//   Tell Dean Mamnev to finish this thing.
// </p>
// </div>

const App = () => (
  <div className="container-fluid mainContainer">
      <Jumbotron />
    {/* <Wrapper /> */}
    <Game />
  </div>
);

export default App;
