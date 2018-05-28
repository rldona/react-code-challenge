import React from 'react';
import ReactDOM from 'react-dom';

import PhoneDetailContainer from '../PhoneDetailContainer';

it('Render PhoneDetailContainer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneDetailContainer />, div);
});
