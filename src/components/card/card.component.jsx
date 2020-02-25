import React from 'react';
import './card.styles.scss';

export const Card = (props) => (
    <div className="card-container">
        <h2>{props.name}</h2>
    </div>
)