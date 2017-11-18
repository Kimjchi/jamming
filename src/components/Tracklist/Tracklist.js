import React, { Component } from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends Component {
  render() {
    return (
      <div className="TrackList">
          {
            //You will add a map method that renders a set of Track components
            this.props.results.map(result => {
              return <Track name={result.name} artist={result.artist} album={result.album}/>
            })
          }
      </div>
    );
  }
}

export default Tracklist;
