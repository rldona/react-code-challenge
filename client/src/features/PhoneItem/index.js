import React, { Component } from 'react';

import './Phone.css';

class PhoneItem extends Component {
  navigateTo = (id, e) => {
    this.props.history.push(`/phones/${id}`);
    this.props.onSelectedPhone(id);
  }

  render() {
    const phone = this.props.phone;

    return (
      <div className="phone animated flipInY" onClick={this.navigateTo.bind(this, phone.id)}>
        <img src={phone.preview} alt={phone.title} />
        <p>{phone.title}</p>
      </div>
    );
  }
}

export default PhoneItem;
