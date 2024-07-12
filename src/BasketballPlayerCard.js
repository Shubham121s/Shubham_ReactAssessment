// src/BasketballPlayerCard.js

import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="image-container">
        <img src={image} alt={`${name}`} className="player-image" />
      </div>
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <div className="stat">
            <span className="stat-title">Points per Game:</span>
            <span>{stats.pointsPerGame}</span>
          </div>
          <div className="stat">
            <span className="stat-title">Assists per Game:</span>
            <span>{stats.assistsPerGame}</span>
          </div>
          <div className="stat">
            <span className="stat-title">Rebounds per Game:</span>
            <span>{stats.reboundsPerGame}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;

