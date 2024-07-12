// src/App.js

import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

const players = [
  {
    name: "LeBron James",
    image: "https://media.istockphoto.com/id/2149109724/photo/confident-male-football-player-in-professional-attire-holding-ball.jpg?s=612x612&w=0&k=20&c=_iaZnZy3MDVYg0x5JdIOPn01kihs9TiRknE7US_-ico=",
    position: "Forward",
    stats: { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }
  },
  {
    name: "Stephen Curry",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    position: "Guard",
    stats: { pointsPerGame: 30.1, assistsPerGame: 6.5, reboundsPerGame: 5.2 }
  },
  {
    name: "Kevin Durant",
    image: "https://media.istockphoto.com/id/1468586208/photo/portrait-of-a-female-soccer-player-holding-a-soccer-ball-in-the-field.jpg?s=612x612&w=0&k=20&c=ost7NDuLvgbfYSXEtsgF9DOrhsDCwNlg_oVQC17bAjo=",
    position: "Forward",
    stats: { pointsPerGame: 27.1, assistsPerGame: 5.6, reboundsPerGame: 7.1 }
  }
];

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Basketball Players</h1>
      <div className="player-cards-container">
        {players.map(player => (
          <BasketballPlayerCard
            key={player.name}
            name={player.name}
            image={player.image}
            position={player.position}
            stats={player.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default App;




