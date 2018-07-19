import {
  REQUEST_ADD_EVENT_DATE_USER,
  RECEIVE_ADD_EVENT_DATE_USER,
  REQUEST_REMOVE_EVENT_DATE_USER,
  RECEIVE_REMOVE_EVENT_DATE_USER
} from '../actions/event_date_users.js';

const initialState = {};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ADD_EVENT_DATE_USER:
      return {
        ...state
      };
    case RECEIVE_ADD_EVENT_DATE_USER:
      return {
        ...state
      };
    case REQUEST_REMOVE_EVENT_DATE_USER:
      return {
        ...state
      };
    case RECEIVE_REMOVE_EVENT_DATE_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
