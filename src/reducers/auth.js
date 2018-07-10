import { REQUEST_STORE_AUTH, RESPONSE_STORE_AUTH } from '../actions/auth.js';

const initialState = {
  auth: {}
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STORE_AUTH:
      return {
        ...state,
        auth: action.auth,
        isSynced: action.isSynced,
        isSyncing: action.isSyncing
      };
    case RESPONSE_STORE_AUTH:
      return {
        ...state,
        isSynced: action.isSynced,
        isSyncing: action.isSyncing
      };
    default:
      return state;
  }
}
