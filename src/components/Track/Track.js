import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  /*renderAction() {
    if(isRemoval) {
      return <a>-</a>;
    }
    else {
      return <a>+</a>;
    }
  }*/

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist + " | " + this.props.album}</p>
        </div>
        <a className="Track-action">
          {
            //+ or - will go here
          }
        </a>
      </div>
    );
  }
}

export default Track;
