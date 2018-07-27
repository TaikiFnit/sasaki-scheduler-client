import { connect } from 'react-redux';
import CreateEvent from '../components/CreateEvent';
import {
  createEvent,
  fetchCreateEventData,
  handleFormChange,
  handleFormArrayAdd,
  handleFormArrayRemove,
  handleCheckbox
} from '../actions/create_event';
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

      dispatch(handleFormChange(id, value));
    },
    handleSwitchChange: id => ev => {
      const checked = ev.target.checked;
      dispatch(handleFormChange(id, checked));
    },
    handleDateChange: value => {
      const date = {
        prospective_date: `${value.getFullYear()}/${value.getMonth()}/${value.getDate()}`
      };
      dispatch(handleFormArrayAdd('dates', date));
    },
    handleFormArrayRemove: (id, index) => ev => {
      dispatch(handleFormArrayRemove(id, index));
    },
    handleFromArrayAdd: (id, obj) => ev => {
      dispatch(handleFormArrayAdd(id, obj));
    },
    handleCheckbox: (id, index) => ev => {
      dispatch(handleCheckbox(id, index, ev.target.checked));
    },
    clickedCreate: (createEventData, auth) => ev => {
      const sendable_users = createEventData.users.filter(
        user => user.checked === true
      );
      const sendable_grades = createEventData.grades.filter(
        grade => grade.checked === true
      );
      const user_ids = sendable_users.map(user => user.id);
      const grades = sendable_grades.map(grade => grade.name);
      const formData = { ...createEventData.form, user_ids, grades };

      dispatch(createEvent(formData));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
