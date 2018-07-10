import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import eventReducer from '../reducers/event';
import eventsReducer from '../reducers/events';
import authReducer from '../reducers/auth';
import persistState from 'redux-localstorage';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      event: eventReducer,
      events: eventsReducer,
      router: routerReducer,
      auth: authReducer
    }),
    applyMiddleware(routerMiddleware(history), thunkMiddleware),
    persistState('auth')
  );
}
