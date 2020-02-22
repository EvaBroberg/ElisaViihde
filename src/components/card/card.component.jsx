import React from 'react';
import './card.styles.scss';

export const Card = (props) => (
    <div className="card-container">
        {/* <img src = {`https://robohash.org/${props.monster.id}?set=set2`} /> */}
        <h2> { props.program.name } </h2>
    </div>
)