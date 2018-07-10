import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchEvents } from '../actions/events';
import { push } from 'react-router-redux';

function mapStateToProps({ events, router }) {
  return { events, router };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents() {
      dispatch(fetchEvents());
    },
    pushToEvent(id) {
      dispatch(push('/events/' + id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
