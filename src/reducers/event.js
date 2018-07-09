import { REQUEST_EVENT, RECEIVE_EVENT } from '../actions/event.js';

const initialState = {
  event: {},
  isFetching: false
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EVENT:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_EVENT:
      return {
        ...state,
        isFetching: false,
        event: action.event
      };
    default:
      return state;
  }
}
