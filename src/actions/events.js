export const REQUEST_EVENTS = 'REQUEST_EVENTS';
function requestEvents() {
  return {
    type: REQUEST_EVENTS
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
function receiveEvents(json) {
  return {
    type: RECEIVE_EVENTS,
    events: json
  };
}

export function fetchEvents() {
  return function(dispatch) {
    dispatch(requestEvents());

    return fetch('http://localhost:8765/events/')
      .then(response => response.json())
      .then(json => dispatch(receiveEvents(json)));
  };
}
