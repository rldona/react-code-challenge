import React from 'react';

import Toggle from 'react-toggle';

import './Header.css';
import "react-toggle/style.css";

const _goTo = (route, history) => {
  history.push(route);
}

const _handleBaconChange = (onToogleAnimations) => {
  onToogleAnimations();
}

const Header = ({ appOptions, onToogleAnimations, history }) => (
  <div className="header-component">
    <h1 onClick={_goTo.bind(this, '/', history)}>Phone Catalog App</h1>
    <div>
    <label>
      <Toggle
        defaultChecked={appOptions.toogleAnimations}
        onChange={_handleBaconChange.bind(this, onToogleAnimations)} />
      <span>Animations</span>
      </label>
    </div>
  </div>
);

export default Header;
