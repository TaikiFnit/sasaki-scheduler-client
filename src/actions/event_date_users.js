import { base_url } from './server_info';
import { fetchEvent } from './event';
const queryString = require('query-string');

export const REQUEST_ADD_EVENT_DATE_USER = 'REQUEST_ADD_EVENT_DATE_USER';
function requestAddEventDateUser() {
  return {
    type: REQUEST_ADD_EVENT_DATE_USER,
    isAdded: false,
    isAdding: true
  };
}

export const RECEIVE_ADD_EVENT_DATE_USER = 'RECEIVE_ADD_EVENT_DATE_USER';
function receiveAddEventDateUser(json) {
  return {
    type: RECEIVE_ADD_EVENT_DATE_USER,
    isAdded: true,
    isAdding: false
  };
}

export const REQUEST_REMOVE_EVENT_DATE_USER = 'REQUEST_REMOVE_EVENT_DATE_USER';
function requestRemoveEventDateUser() {
  return {
    type: REQUEST_REMOVE_EVENT_DATE_USER,
    isRemoved: false,
    isRemoving: true
  };
}

export const RECEIVE_REMOVE_EVENT_DATE_USER = 'RECEIVE_REMOVE_EVENT_DATE_USER';
function receiveRemoveEventDateUser(json) {
  return {
    type: RECEIVE_REMOVE_EVENT_DATE_USER,
    isRemoved: json.status,
    isRemoving: false
  };
}

export function addEventDateUser(
  eventDateId,
  changedChoice,
  accessToken,
  eventId
) {
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  };
  const body = queryString.stringify({
    status: changedChoice
  });
  const mode = 'cors';

  return dispatch => {
    dispatch(requestAddEventDateUser());
    return fetch(
      base_url +
        '/eventDateUsers/add/' +
        eventDateId +
        '?access_token=' +
        accessToken,
      {
        method,
        headers,
        body,
        mode
      }
    )
      .then(response => response.json())
      .then(json => {
        // dispatch action for store results
        dispatch(receiveAddEventDateUser(json));
        // dispatch action for re-fetch event
        dispatch(fetchEvent(eventId));
      });
  };
}

export function removeEventDateUser(eventDateUserId, accessToken, eventId) {
  const method = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  };
  const mode = 'cors';
  const body = queryString.stringify({
    _method: 'DELETE'
  });

  return dispatch => {
    dispatch(requestRemoveEventDateUser());
    return fetch(
      base_url +
        '/eventDateUsers/delete/' +
        eventDateUserId +
        '?access_token=' +
        accessToken,
      {
        method,
        headers,
        body,
        mode
      }
    )
      .then(response => response.json())
      .then(json => dispatch(receiveRemoveEventDateUser(json)));
  };
}
