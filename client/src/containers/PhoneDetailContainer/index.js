import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  selectedPhone,
  getPhoneList
} from '../../redux/actions';

import Loading from '../../features/Loading';
import PhoneDetailComponent from '../../features/PhoneDetailComponent';

import './PhoneDetailCointainer.css'

class PhoneDetailContainer extends Component {
  componentDidMount() {
    // Check if there are items already loaded
    if (!this.props.phoneList.items) {
      this.props.getPhoneList();
    }
  }

  render() {
    if (this.props.phoneList.pending || !this.props.phoneList.items ) {
      return (
        <Loading message="Loading..." {...this.props} />
      );
    }

    const phone = this.props.phoneList.items[this.props.match.params.id]

    return (
      <div className="phone-detail-container">
        <PhoneDetailComponent phone={phone} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appOptions: state.appOptions,
    phoneList: state.phoneList
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onSelectedPhone: () => dispatch(selectedPhone()),
    getPhoneList: () => dispatch(getPhoneList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailContainer);
