import React from 'react';
import {CardList} from '../card-list/card-list.component';


export const Channel = props => {
    if( props.programs.length ) {

       if ( props.logo ) {
        return ( 
            <div className='channel'>
                <img src={props.logo} alt="logo"/>
                {props.programs.map(program => (
                    <h4>{program.name}</h4>
                ))}
            </div>
            
            )
       } else {
        return ( 
            <div className='channel'>
                <h3>{props.name}</h3>
                {props.programs.map(program => (
                    <h4>{program.name}</h4>
                ))}
            </div>
            
            )
       }

           

    } else return false;

};

