import React, { Component } from 'react';

import Icon from 'react-icons-kit';
import { ic_arrow_back } from 'react-icons-kit/md/ic_arrow_back'

import './PhoneDetailComponent.css';

class PhoneDetailComponent extends Component {

  componentDidMount() {
    // Check if there are items already loaded
    if (!this.props.phoneList.items) {
      this.props.getPhoneList();
    }
  }

  _goBack = () => {
    this.props.history.goBack();
  }

  _goHome = () => {
    this.props.history.push('/');
  }

  render() {
    if (this.props.phoneList.pending || !this.props.phoneList.items ) {
      return (
        null
      );
    }

    const phone = this.props.phoneList.items[this.props.match.params.id]

    if (typeof phone === 'undefined') {
      return (
        <div className={`phone-detail-component ${ this.props.appOptions.toogleAnimations ? 'animated bounceInDown' : null }`}>
          <div className="content">
            <Icon icon={ ic_arrow_back } size={30} className="button go-back" onClick={this._goHome} />
            <div>There is no phone with that identifier :(</div>
          </div>
        </div>
      );
    }

    return (
      <div className={`phone-detail-component ${ this.props.appOptions.toogleAnimations ? 'animated bounceInDown' : null }`}>
        <div className="content">
          <Icon icon={ ic_arrow_back } size={30} className="button go-back" onClick={this._goBack} />
          <div className="image">
            <img src={phone.image} alt={phone.title} />
          </div>
          <div className="info">
            <h2 className="title">{phone.title}</h2>
            <p className="field">Description</p>
            <p>{phone.description}</p>
            <p className="field">Color</p>
            <p>{phone.color}</p>
            <p className="field">Price</p>
            <p>{phone.price} €</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneDetailComponent;
