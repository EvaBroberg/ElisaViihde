import React from 'react';
import { Channel } from '../channel/channel.component';
import './channel-list.styles.scss';

export const ChannelList = props => (
    <div className='channelList'>
        
        {
            props.channels.map( channel => (
                <Channel name={channel.channel.name} programs={channel.programs}/>
            )
            
            )
        }
    </div>
);