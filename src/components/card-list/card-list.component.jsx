import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss';

export const CardList = props => (
    <div className='card-list'>
        {props.programs.map( program => (
            <Card program={program} name={program.name}/>
        )
            
          )}
    </div>
);