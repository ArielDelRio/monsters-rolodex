import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map((monster, index) => (
            <div key={index}>
                <h1>{monster.name}</h1>
                <h2>{monster.email}</h2>
            </div>
        ))}
    </div>
);

