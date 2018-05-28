import React from 'react';
import ReactDOM from 'react-dom';

import PhoneItem from '../PhoneItem';

it('Render PhoneItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhoneItem />, div);
});
