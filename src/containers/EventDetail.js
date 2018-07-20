import { connect } from 'react-redux';
import EventDetail from '../components/EventDetail';
import { fetchEvent } from '../actions/event';
import { push } from 'react-router-redux';

function mapStateToProps(props) {
  const { event, router, auth } = props;
  return { event: event, router: router, auth: auth };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvent(id) {
      dispatch(fetchEvent(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
