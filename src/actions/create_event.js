import { base_url } from './server_info';
const queryString = require('query-string');

export const POST_REQUEST_NEW_EVENT = 'POST_REQUEST_NEW_EVENT';
function postRequestNewEvent() {
  return {
    type: POST_REQUEST_NEW_EVENT
  };
}

export const POST_RESPONSE_NEW_EVENT = 'POST_RESPONSE_NEW_EVENT';
function postResponseNewEvent(json) {
  return {
    type: POST_RESPONSE_NEW_EVENT
  };
}

export const GET_REQUEST_NEW_EVENT = 'GET_REQUEST_NEW_EVENT';
function getRequestNewEvent() {
  return {
    type: GET_REQUEST_NEW_EVENT
  };
}

export const GET_RESPONSE_NEW_EVENT = 'GET_RESPONSE_NEW_EVENT';
function getResponseNewEvent(json) {
  const users =
    json.status === true
      ? json.users.map(user => {
          user['checked'] = false;
          return user;
        })
      : [];

  const res =
    json.status == true ? { eventTypes: json.event_types, users } : {};

  if (json.status === true && res.users.length !== 0) {
    const users = res.users.map(user => {});
  }
  return {
    type: GET_RESPONSE_NEW_EVENT,
    ...res
  };
}

export function fetchCreateEventData() {
  return function(dispatch) {
    dispatch(getRequestNewEvent());

    return fetch(base_url + '/events/add')
      .then(response => response.json())
      .then(json => dispatch(getResponseNewEvent(json)));
  };
}

export function createEvent(formData, accessToken) {
  return function(dispatch) {
    dispatch(postRequestNewEvent());

    const method = 'POST';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    const body = queryString.stringify({
      ...formData
    });
    const mode = 'cors';

    return (base_url + '/events/add?access_token=' + accessToken,
    {
      method,
      headers,
      body,
      mode
    })
      .then(response => response.json())
      .then(json => dispatch(postResponseNewEvent(json)));
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

export const HANDLE_FORM_ARRAY_CHANGE = 'HANDLE_FORM_ARRAY_CHANGE';
export function handleFormArrayChange(id, value) {
  return {
    type: HANDLE_FORM_ARRAY_CHANGE,
    id,
    value
  };
}

export const HANDLE_FORM_ARRAY_ADD = 'HANDLE_FORM_ARRAY_ADD';
export function handleFormArrayAdd(id, value) {
  return {
    type: HANDLE_FORM_ARRAY_ADD,
    id,
    value
  };
}

export const HANDLE_FORM_ARRAY_REMOVE = 'HANDLE_FORM_ARRAY_REMOVE';
export function handleFormArrayRemove(id, index) {
  return {
    type: HANDLE_FORM_ARRAY_REMOVE,
    id,
    index
  };
}

export const HANDLE_CHECKBOX = 'HANDLE_CHECKBOX';
export function handleCheckbox(index, checked) {
  return {
    type: HANDLE_CHECKBOX,
    index,
    checked
  };
}
