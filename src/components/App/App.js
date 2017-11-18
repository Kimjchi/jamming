import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [
        {
          name: 'Light my fire',
          artist: 'The doors',
          album: 'The very best of doors'
        },
        {
          name: 'Take me home, country roads',
          artist: 'John Denver',
          album: 'The essential John Denver'
        },
        {
          name: 'Every breath you take',
          artist: 'The Police',
          album: 'Who knows'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults}/>
            <Playlist/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
