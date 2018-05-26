import React from 'react';

import './Loading.css';

const Loading = ({ message }) => (
  <div className="loading backdrop">
    <div className="loading message">
      <div className="lds-ripple"><div></div><div></div></div>
      <p>{message}</p>
    </div>
  </div>
);

export default Loading;
