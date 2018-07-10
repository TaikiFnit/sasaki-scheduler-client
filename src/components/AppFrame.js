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
import GoogleLogin from 'react-google-login';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  avatar: {
    margin: 10
  }
};

class AppFrame extends Component {
  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.classes = props.classes;
  }

  responseGoogle(response) {
    this.props.receiveResponseGoogle(response);
  }

  render() {
    const auth = this.props.auth.auth;
    const Login =
      Object.keys(auth).length === 0 ? (
        <GoogleLogin
          clientId="95922334177-ejrsepf4iqenbjfsv4n87hrotvf224dc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      ) : (
        <Avatar
          alt={auth.profileObj.name}
          src={auth.profileObj.imageUrl}
          className={this.classes.avatar}
        />
      );
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={this.classes.flex}
            >
              Sasaki Scheduler
            </Typography>
            {Login}
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
