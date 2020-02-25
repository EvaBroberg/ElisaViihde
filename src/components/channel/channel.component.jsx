import React from 'react';
import {CardList} from '../card-list/card-list.component';

export const Channel = props => {

    if( props.programs.length ) 


    return (    <div className='channel'>
        <h3>{props.name}</h3>
        {<CardList programs={props.programs}/>
        }
    </div>
    
    )

    else return false;

};