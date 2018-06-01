import React from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { toogleAnimations } from '../../redux/actions';

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

const mapStateToProps = (state) => {
  return {
    appOptions: state.appOptions
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onToogleAnimations: () => dispatch(toogleAnimations())
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
