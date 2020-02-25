import React from 'react';
import {ChannelList} from './components/channel-list/channel-list.component';

import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      channels: [],
      searchField: '',
      title: ''
    };
  }

  async componentDidMount() {
    let response = await fetch('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
    let data = await response.json();

    this.setState({ channels: data.schedule });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value, title: event.target });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  resolveData( data ) {
    console.log( data );
  }
  
  
  renderChannels() {
    const { channels, searchField } = this.state;
      const filteredPrograms = channels;
    return (
      <div className="App">
        <ChannelList channels = {filteredPrograms} />
      </div>
      
    );
  }


  render(){
   
  
    return (
      this.state.channels.length ? this.renderChannels() : ''
    )

  }
}

export default App;
  