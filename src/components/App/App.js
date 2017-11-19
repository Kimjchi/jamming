import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      playlistName: "Man's not hot",
      playlistTracks: [
        {
          id: 1,
          name: 'Light my fire',
          artist: 'The doors',
          album: 'The very best of doors',
          uri: '1234'
        },
        {
          id: 2,
          name: 'Take me home, country roads',
          artist: 'John Denver',
          album: 'The essential John Denver',
          uri: '452'
        },
        {
          id: 3,
          name: 'Every breath you take',
          artist: 'The Police',
          album: 'Who knows',
          uri: '764'
        }
      ],
      searchResults : [
        {
          id: 1,
          name: 'Light my fire',
          artist: 'The doors',
          album: 'The very best of doors',
          uri: '1234'
        },
        {
          id: 2,
          name: 'Take me home, country roads',
          artist: 'John Denver',
          album: 'The essential John Denver',
          uri: '452'
        },
        {
          id: 4,
          name: 'The End',
          artist: 'The Doors',
          album: 'Random Shuffle',
          uri: '5436'
        }
      ]
    }
  }

  addTrack(newTrack) {
    let alreadyInPlaylist = false;
    this.state.playlistTracks.forEach(track => {
      if(newTrack.id === track.id) {
        alreadyInPlaylist = true;
      }
    });
    if(!alreadyInPlaylist) {
      let playlist = this.state.playlistTracks;
      playlist.push(newTrack);
      this.setState({playlistTracks: playlist});
    }
  }

  removeTrack(trackToRemove) {
    let playlist = this.state.playlistTracks.filter(track => {
      return (trackToRemove.id !== track.id);
    });
    this.setState({playlistTracks: playlist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIS = [];
    this.state.playlistTracks.forEach(track => {
        trackURIS.push(track.uri);
      });
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks}
                      onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
