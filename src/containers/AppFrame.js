import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';

function mapStateToProps({ router }) {
  return router;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);
