import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class AppFrame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppFrame);
