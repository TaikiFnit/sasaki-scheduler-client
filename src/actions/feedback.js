import { base_url } from './server_info';
const queryString = require('query-string');

export const POST_FEEDBACK_REQUEST = 'POST_FEEDBACK_REQUEST';
function postFeedbackRequest() {
  return {
    type: POST_FEEDBACK_REQUEST,
    isPosting: false,
    isPosted: false
  };
}

export const POST_FEEDBACK_RESPONSE = 'POST_FEEDBACK_REQUEST';
function postFeedbackResponse(json) {
  return {
    type: POST_FEEDBACK_RESPONSE,
    isPosting: false,
    isPosted: true,
    status: json.status
  };
}

export function postFeedBack(formData, accessToken) {
  return function(dispatch) {
    dispatch(postFeedbackRequest());

    const method = 'POST';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };

    const body = queryString.stringify(formData, { arrayFormat: 'index' });
    const mode = 'cors';

    return fetch(base_url + '/feedbacks/add?access_token=' + accessToken, {
      method,
      headers,
      body,
      mode
    })
      .then(response => response.json())
      .then(json => dispatch(postFeedbackResponse(json)));
  };
}

export const HANDLE_FORM_CHANGE = 'HANDLE_FORM_CHANGE';
export function handleFormChange(id, value) {
  return {
    type: HANDLE_FORM_CHANGE,
    id,
    value
  };
}
