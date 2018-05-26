import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';

import Header from '../../features/Header';
import { PhoneListContainer } from '../../containers';
import { PhoneDetailContainer } from '../../containers';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

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
          <div>
            <Header />
            <Switch>
              <Route exact path="/phones" component={ PhoneListContainer } />
              <Route exact path="/phones/:id" component={ PhoneDetailContainer } />
              <Redirect from="/" to="/phones"/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
