import React from 'react';
import ReactDOM from 'react-dom';

import PhoneListContainer from '../PhoneListContainer';

it('Render PhoneListContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneListContainer />, div);
});
