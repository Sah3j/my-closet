import React from 'react';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="/logo.png"
          alt="header logo"
        />

      </div>

      {/*Profile*/}
      <Profile profileName="Sahejdeep Singh" profilePic="/profile-pic.png"/>

    </div>
  );
}

export default App;
