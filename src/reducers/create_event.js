import {
  POST_REQUEST_NEW_EVENT,
  POST_RESPONSE_NEW_EVENT,
  GET_REQUEST_NEW_EVENT,
  GET_RESPONSE_NEW_EVENT,
  HANDLE_FORM_CHANGE,
  HANDLE_FORM_ARRAY_ADD,
  HANDLE_FORM_ARRAY_REMOVE,
  HANDLE_CHECKBOX
} from '../actions/create_event.js';

const initialState = {
  form: {
    title: '',
    description: '',
    locale: '',
    event_type_id: 1,
    dates: [],
    user_ids: [],
    deadline: '',
    grades: []
  },
  eventTypes: [],
  users: [],
  grades: [],
  feedbacks: [],
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
      const grades = 'grades' in action ? { grades: action.grades } : {};

      return {
        ...state,
        isFetching: false,
        ...users,
        ...eventTypes,
        ...grades,
        feedbacks: action.feedbacks
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
    case HANDLE_FORM_CHANGE:
      let form = state.form;
      form[action.id] = action.value;
      return {
        ...state,
        form
      };
    case HANDLE_FORM_ARRAY_ADD:
      let array = state.form[action.id];
      array.push(action.value);
      return {
        ...state,
        form: {
          ...state.form,
          [action.id]: array
        }
      };

    case HANDLE_FORM_ARRAY_REMOVE:
      let r_array = state.form[action.id];
      r_array.splice(action.index, 1);
      return {
        ...state,
        form: {
          ...state.form,
          [action.id]: r_array
        }
      };
    case HANDLE_CHECKBOX:
      const checked = state[action.id];
      checked[action.index]['checked'] = action.checked;
      return {
        ...state,
        [action.id]: checked
      };
    default:
      return state;
  }
}
