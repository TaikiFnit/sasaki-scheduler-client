import { REQUEST_EVENTS, RECEIVE_EVENTS } from '../actions/events.js';

const initialState = {
  events: [],
  isFetching: false
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EVENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_EVENTS:
      return {
        ...state,
        isFetching: false,
        events: action.events
      };
    default:
      return state;
  }
}
