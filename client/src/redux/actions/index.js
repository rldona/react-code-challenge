import {
  SELECTED_PHONE,
  LOAD_PHONES
} from '../constants';

export function selectedPhone(value) {
  return {
    type: SELECTED_PHONE,
    payload: value
  }
}

export function getPhoneList() {
  return {
    type: LOAD_PHONES
  };
}