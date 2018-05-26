import {
  LOAD_PHONES,
  LOAD_PHONES_SUCCEEDED,
  LOAD_PHONES_FAILED
} from '../constants';

const initialState = {
  pending: false,
  succeeded: false,
  failed: false,
  items: null
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PHONES:
      return {
        ...state,
        items: [],
        pending: true
      }
    case LOAD_PHONES_SUCCEEDED:
      return {
        ...state,
        pending: false,
        succeeded: true,
        items: action.response
      }
    case LOAD_PHONES_FAILED:
      return {
        ...state,
        failed: true,
        items: []
      }
    default:
      return state;
  }
}
