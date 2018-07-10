import { base_url } from './server_info';
const queryString = require('query-string');

export const REQUEST_STORE_AUTH = 'REQUEST_STORE_AUTH';
function requestStoreAuth(auth) {
  return {
    type: REQUEST_STORE_AUTH,
    auth: auth,
    isSynced: false,
    isSyning: true
  };
}

export const RESPONSE_STORE_AUTH = 'RESPONSE_STORE_AUTH';
function receiveStoreAuth(json) {
  return {
    type: RESPONSE_STORE_AUTH,
    isSynced: json.status,
    isSyncing: false
  };
}

export function receiveResponseGoogle(auth) {
  const method = 'POST';
  const body = queryString.stringify({
    googleId: auth.googleId,
    tokenId: auth.tokenId,
    accessToken: auth.accessToken,
    email: auth.profileObj.email
  });
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  };
  const mode = 'cors';

  return dispatch => {
    dispatch(requestStoreAuth(auth));
    return fetch(base_url + '/users/', { method, headers, body, mode })
      .then(response => response.json())
      .then(json => dispatch(receiveStoreAuth(json)));
  };
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type: LOGOUT,
    isSynced: false,
    isSyncing: false,
    auth: {}
  };
}

export const REQUEST_AUTH_VALIDATION = 'REQUEST_AUTH_VALIDATION';
function requestAuthValidation() {
  console.log('request auth validation');
  return {
    type: REQUEST_AUTH_VALIDATION,
    isSynced: false,
    isSyncing: true
  };
}

export const RECEIVE_AUTH_VALIDATION = 'RECEIVE_AUTH_VALIDATION';
function receiveAuthValidation(json) {
  if ('error' in json) {
    console.log('invalid access token');
  } else {
    console.log('valid access token');
  }

  const results =
    'error' in json
      ? {
          isSynced: false,
          auth: {}
        }
      : {
          isSynced: true
        };

  return {
    type: RECEIVE_AUTH_VALIDATION,
    isSyncing: true,
    ...results
  };
}

export function authValidation(auth) {
  return dispatch => {
    dispatch(requestAuthValidation());

    return fetch(
      'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' +
        auth.accessToken
    )
      .then(response => response.json())
      .then(json => dispatch(receiveAuthValidation(json)));
  };
}
