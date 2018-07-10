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
