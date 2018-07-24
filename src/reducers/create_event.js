import {
  POST_REQUEST_NEW_EVENT,
  POST_RESPONSE_NEW_EVENT,
  GET_REQUEST_NEW_EVENT,
  GET_RESPONSE_NEW_EVENT
} from '../actions/create_event.js';

const initialState = {
  form: {
    title: '',
    description: '',
    locale: '',
    event_type_id: 1,
    dates: [],
    user_ids: [],
    deadline: ''
  },
  eventTypes: [],
  users: [],
  isPosting: false,
  isPosted: false
};

export default function createEventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST_NEW_EVENT:
      return {
        ...state,
        isFetching: true
      };
    case GET_RESPONSE_NEW_EVENT:
      const users = 'users' in action ? { users: action.users } : {};
      const eventTypes =
        'eventTypes' in action ? { eventTypes: action.eventTypes } : {};

      return {
        ...state,
        isFetching: false,
        ...users,
        ...eventTypes
      };
    case POST_REQUEST_NEW_EVENT:
      return {
        ...state,
        isFetching: true,
        isPosted: false
      };
    case POST_RESPONSE_NEW_EVENT:
      return {
        ...state,
        isFetching: false,
        isPosted: true
      };
    default:
      return state;
  }
}
