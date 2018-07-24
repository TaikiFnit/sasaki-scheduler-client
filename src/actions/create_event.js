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
  console.log('getResponseNewEvent');
  const res =
    json.status == true
      ? { eventTypes: json.event_types, users: json.users }
      : {};

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
POST_REQUEST_NEW_EVENT, POST_RESPONSE_NEW_EVENT;
