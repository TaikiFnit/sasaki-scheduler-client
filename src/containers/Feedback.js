import { connect } from 'react-redux';
import Feedback from '../components/Feedback';
import { fetchCreateEventData } from '../actions/create_event';
import { postFeedBack, handleFormChange, initAll } from '../actions/feedback';
import { push } from 'react-router-redux';

function mapStateToProps({ auth, createEventData, feedBack }) {
  return { createEventData: createEventData, feedBack, auth: auth };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCreateEventData() {
      dispatch(fetchCreateEventData());
    },
    postFeedBack: (feedBack, auth) => ev => {
      if (!('accessToken' in auth)) {
        console.log('Invalid auth');
        return;
      }

      const formData = {
        body: feedBack.body,
        event_type_id: feedBack.event_type_id
      };

      dispatch(postFeedBack(formData, auth.accessToken));
    },
    handleFormChange: id => ev => {
      const value = ev.target.value;

      dispatch(handleFormChange(id, value));
    },
    initAll() {
      dispatch(initAll());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback);
