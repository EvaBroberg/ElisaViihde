import React from 'react';
import { Channel } from '../channel/channel.component';
import './channel-list.styles.scss';

export const ChannelList = props => {

    

return (
    <div className='channelList'>
        
        {
            props.channelsPrograms.map( channel => {
                let logo = props.channelsLogos.hasOwnProperty( channel.channel.id ) ? props.channelsLogos[channel.channel.id] : null;

                return (
                    <Channel programs={channel.programs} name={channel.channel.name} logo={logo}/>
                )
            }
                
            )
            
        }
    </div>
);

    }