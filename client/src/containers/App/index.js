import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';

import { PhoneListContainer } from '../../containers';
import { PhoneDetailContainer } from '../../containers';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="container">
            <Route exact path="/phones" component={ PhoneListContainer } />
            <Route exact path="/phones/:id" component={ PhoneDetailContainer } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
