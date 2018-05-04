import React, { Component } from 'react';
// import logo from './logo.svg';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
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

class App extends Component {
state = {
  friends
};


  render() {
    return (
      <Wrapper>
  <div className="App">
<header className="App-header">
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  <h1 className="App-title">Clicky Game</h1>
</header>
<p className="App-intro">
  Tell Dean Mamnev to finish this thing.
</p>
</div>
      <Title>
        Welcome to the nightmare I call a project
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
