import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { receiveResponseGoogle, logout, authValidation } from '../actions/auth';
import { push } from 'react-router-redux';

function mapStateToProps({ router, auth }) {
  return { router: router, auth: auth };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveResponseGoogle(auth) {
      dispatch(receiveResponseGoogle(auth));
    },
    logout() {
      dispatch(logout());
    },
    authValidation(auth) {
      dispatch(authValidation(auth));
    },
    pushToHome() {
      dispatch(push('/'));
    },
    pushTo(url) {
      dispatch(push(url));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppFrame);
