import {
  REQUEST_STORE_AUTH,
  RESPONSE_STORE_AUTH,
  LOGOUT,
  REQUEST_AUTH_VALIDATION,
  RECEIVE_AUTH_VALIDATION
} from '../actions/auth.js';

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
    case LOGOUT:
      return {
        ...state,
        isSynced: action.isSynced,
        isSyncing: action.isSyncing,
        auth: action.auth
      };
    case REQUEST_AUTH_VALIDATION:
      return {
        ...state,
        isSynced: action.isSynced,
        isSyncing: action.isSyncing
      };
    case RECEIVE_AUTH_VALIDATION:
      const auth = 'auth' in action ? { auth: action.auth } : {};
      return {
        ...state,
        isSynced: action.isSynced,
        isSyncing: action.isSyncing,
        ...auth
      };
    default:
      return state;
  }
}
