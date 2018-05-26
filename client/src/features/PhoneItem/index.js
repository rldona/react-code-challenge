import React from 'react';

import './Phone.css';

const navigateTo = (id, history, onSelectedPhone, e) => {
  history.push(`/phones/${id}`);
  onSelectedPhone(id);
}

const PhoneItem = ({ phone, history, onSelectedPhone }) => (
  <div className="phone animated flipInY" onClick={navigateTo.bind(this, phone.id, history, onSelectedPhone)}>
    <img src={phone.preview} alt={phone.title} />
    <p>{phone.title}</p>
  </div>
);

export default PhoneItem;
