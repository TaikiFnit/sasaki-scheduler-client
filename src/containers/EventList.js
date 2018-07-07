import { connect } from 'react-redux';
import EventList from '../components/EventList';
import { fetchEvents } from '../actions/events';

function mapStateToProps({ events }) {
  return events;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents() {
      dispatch(fetchEvents());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
