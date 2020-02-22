import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      programs: [],
      searchField: '',
      title: ''
    };
  }

  componentDidMount() {
    fetch('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
    .then(response => response.json())
    .then(data => this.setState({ programs: data.schedule[0].programs }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value, title: event.target });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render(){
    const { programs, searchField } = this.state;
    const filteredPrograms = programs.filter(program => program.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <h1>Search programs</h1>
        <SearchBox placeholder='search programs' handleChange={this.handleChange}/>
        <CardList programs = {filteredPrograms} />
      </div>
    )

  }
}

export default App;
  