import { base_url } from './server_info';

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
function requestRemoveEventDateUser() {}

export const RECEIVE_REMOVE_EVENT_DATE_USER = 'RECEIVE_REMOVE_EVENT_DATE_USER';
function receiveRemoveEventDateUser(json) {}

export function addEventDateUser(changedChoice) {
  return dispatch => {
    dispatch(requestAddEventDateUser());
    return fetch('')
      .then(response => response.json())
      .then(json => {
        // dispatch action for store results
        dispatch(receiveAddEventDateUser(json));
        // dispatch action for re-fetch event
      });
  };
}

export function removeEventDateUser(id) {
  return dispatch => {
    dispatch(requestRemoveEventDateUser());
    return fetch('')
      .then(response => response.json())
      .then(json => dispatch(receiveRemoveEventDateUser(json)));
  };
}
