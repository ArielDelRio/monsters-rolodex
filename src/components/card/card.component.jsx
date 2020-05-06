import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src="" alt="monster"/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
);

