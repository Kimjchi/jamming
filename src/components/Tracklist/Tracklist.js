import React, { Component } from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends Component {
  render() {
    return (
      <div className="TrackList">
          {
            //You will add a map method that renders a set of Track components
            this.props.tracks.map(track => {
              return <Track key={track.id} track={track}
                            onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
            })
          }
      </div>
    );
  }
}

export default Tracklist;
