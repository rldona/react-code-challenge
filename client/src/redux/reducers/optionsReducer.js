import {
  SELECTED_PHONE
} from '../constants';

const initialState = {
  selectedPhone: null
};

export default function optionsReducer (state = initialState, action) {
  switch (action.type) {
    case SELECTED_PHONE:
      return {
        ...state,
        selectedPhone: action.payload
      }
    default:
      return state;
  }
}
