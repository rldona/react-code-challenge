import {
  SELECTED_PHONE,
  TOOGLE_ANIMATIONS,
  LOAD_PHONES
} from '../constants';

export function selectedPhone(value) {
  return {
    type: SELECTED_PHONE,
    payload: value
  }
}

export function toogleAnimations() {
  return {
    type: TOOGLE_ANIMATIONS
  }
}

export function getPhoneList() {
  return {
    type: LOAD_PHONES
  };
}