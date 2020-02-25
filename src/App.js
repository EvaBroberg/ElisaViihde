import React from 'react';
import {ChannelList} from './components/channel-list/channel-list.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      channelsLogos: [],
      channelsPrograms: [],
      title: ''
    };
  }

  async componentDidMount() {
    
    let channelsLogos = await this.getChannelsLogos();
    this.setState({ channelsLogos: channelsLogos });
    
    let liveChannels = await this.getLivePrograms();
    
  }

  async getLivePrograms() {
    let response = await fetch('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
    let data = await response.json();

    this.setState({ channelsPrograms: data.schedule });
  }

  async getChannelsLogos() {
    let response = await fetch('https://rest-api.elisaviihde.fi/rest/epg/channels')
    let data = await response.json();

    let channelsLogos = {};
    data.channels.forEach(channel => {
      channelsLogos[channel.id] = channel.logos[7].url
    });
    return channelsLogos;
    
    

  }
  
  
  renderChannels() {
    return (
      <div className="App">
        <ChannelList channelsPrograms={this.state.channelsPrograms} channelsLogos={this.state.channelsLogos}/>
      </div>
      
    );
  }


  render(){
   
  
    return (
      this.state.channelsPrograms.length ? this.renderChannels() : 'Loading...'
    )

  }
}

export default App;
  