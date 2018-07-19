import { connect } from 'react-redux';
import RegisterEventDateForm from '../components/RegisterEventDateForm';
import {
  addEventDateUser,
  removeEventDateUser
} from '../actions/event_date_users';
import { push } from 'react-router-redux';

function mapStateToProps(props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addEventDateUser(newStatus) {
      dispatch(addEventDateUser(newStatus));
    },
    addEventDateUser(id) {
      dispatch(removeEventDateUser(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RegisterEventDateForm
);
