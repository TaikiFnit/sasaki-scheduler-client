import { connect } from 'react-redux';
import CreateEvent from '../components/CreateEvent';
import { createEvent, fetchCreateEventData } from '../actions/create_event';
import { push } from 'react-router-redux';

function mapStateToProps({ router, auth, createEventData }) {
  return { createEventData: createEventData, router: router, auth: auth };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCreateEventData() {
      dispatch(fetchCreateEventData());
    },
    postCreateEvent(formData, auth) {
      if (!('accessToken' in auth)) {
        console.log('Invalid auth');
        return;
      }

      // formDataの加工

      dispatch(createEvent(formData, auth.accessToken));
    },
    handleFormChange: id => ev => {
      const value = ev.target.value;
      console.log(value);
      console.log(id);
      console.log(ev);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
