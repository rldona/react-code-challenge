import React from 'react';
import ReactDOM from 'react-dom';

import PhoneDetailComponent from '../PhoneDetailComponent';

it('Render PhoneDetailComponent without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneDetailComponent />, div);
});
