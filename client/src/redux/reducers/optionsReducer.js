import {
  SELECTED_PHONE,
  TOOGLE_ANIMATIONS
} from '../constants';

const initialState = {
  selectedPhone: null,
  toogleAnimations: true
};

export default function optionsReducer (state = initialState, action) {
  switch (action.type) {
    case SELECTED_PHONE:
      return {
        ...state,
        selectedPhone: action.payload
      }
    case TOOGLE_ANIMATIONS:
      return {
        ...state,
        toogleAnimations: !state.toogleAnimations
      }
    default:
      return state;
  }
}
