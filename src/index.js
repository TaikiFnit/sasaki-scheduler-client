import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppFrame from './containers/AppFrame';
import Home from './containers/Home';
import CreateEvent from './containers/CreateEvent';
import EventList from './containers/EventList';
import EventDetail from './containers/EventDetail';
import { Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';
import './index.css';

const history = createBrowserHistory();
const store = createStore(history);
// ブラウザのもドル等を押した時に正常に状態が反映されない問題への対処
// ref: https://s8a.jp/react-router-redux-5-does-not-work-correctly#%E5%AF%BE%E5%87%A6%E6%B3%95
const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppFrame>
        <ConnectedSwitch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events/" component={EventList} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route path="/events/:id" component={EventDetail} />
        </ConnectedSwitch>
      </AppFrame>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
