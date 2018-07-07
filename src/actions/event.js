import { base_url } from './server_info';

export const REQUEST_EVENT = 'REQUEST_EVENT';
function requestEvent() {
  return {
    type: REQUEST_EVENT
  };
}

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
function receiveEvent(json) {
  return {
    type: RECEIVE_EVENT,
    event: json
  };
}

export function fetchEvent(id) {
  console.log(base_url);
  return function(dispatch) {
    dispatch(requestEvent());

    return fetch(base_url + '/events/view/' + id)
      .then(response => response.json())
      .then(json => dispatch(receiveEvent(json)));
  };
}
