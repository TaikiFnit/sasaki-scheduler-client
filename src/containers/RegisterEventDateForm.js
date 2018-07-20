import { connect } from 'react-redux';
import RegisterEventDateForm from '../components/RegisterEventDateForm';
import {
  addEventDateUser,
  removeEventDateUser
} from '../actions/event_date_users';
import { push } from 'react-router-redux';

function mapStateToProps({ auth, event }) {
  return { auth: auth, eventId: event.event.id };
}

function mapDispatchToProps(dispatch) {
  return {
    addEventDateUser(eventDateId, newStatus, auth, eventId) {
      if (!('accessToken' in auth)) {
        console.log('Invalid auth');
        return;
      }

      dispatch(
        addEventDateUser(eventDateId, newStatus, auth.accessToken, eventId)
      );
    },
    removeEventDateUser(eventDateUserId, auth, eventId) {
      if (!('accessToken' in auth)) {
        console.log('Invalid auth');
        return;
      }

      dispatch(removeEventDateUser(eventDateUserId, auth.accessToken, eventId));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterEventDateForm);
