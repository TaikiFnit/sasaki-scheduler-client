import {
  HANDLE_FORM_CHANGE,
  POST_FEEDBACK_RESPONSE,
  POST_FEEDBACK_REQUEST,
  INIT
} from '../actions/feedback.js';

const initialState = {
  isPosting: false,
  isPosted: false,
  status: false,
  body: '',
  event_type_id: 1
};

export default function createEventReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_FORM_CHANGE:
      return {
        ...state,
        [action.id]: action.value
      };
    case POST_FEEDBACK_REQUEST:
      return {
        ...state,
        isPosting: action.isPosting,
        isPosted: action.isPosted
      };
    case POST_FEEDBACK_RESPONSE:
      return {
        ...state,
        isPosting: action.isPosting,
        isPosted: action.isPosted
      };
    case INIT:
      return initialState;
    default:
      return state;
  }
}
