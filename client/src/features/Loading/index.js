import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading backdrop">
        <div className="loading message">
          <div className="lds-ripple"><div></div><div></div></div>
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

export default Loading;
