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
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  avatar: {
    margin: 10
  },
  appBar: {
    background: '#00897B'
  },
  brand: {
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 3,
    marginRight: 3
  },
  title: {
    fontSize: '28px',
    flex: 1
  }
};

class AppFrame extends Component {
  state = {
    anchorEl: null
  };

  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.classes = props.classes;
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    if (Object.keys(this.props.auth.auth).length !== 0) {
      this.props.authValidation(this.props.auth.auth);
    }
  }

  handleClick = target => {
    this.setState({ anchorEl: target.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.logout();
  };

  responseGoogle(response) {
    this.props.receiveResponseGoogle(response);
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const auth = this.props.auth.auth;
    const Login =
      Object.keys(auth).length === 0 ? (
        <GoogleLogin
          clientId="95922334177-ejrsepf4iqenbjfsv4n87hrotvf224dc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={() => {
            alert('Failure to Login.');
          }}
        />
      ) : (
        <div>
          <IconButton className={classes.avatar} onClick={this.handleClick}>
            <Avatar alt={auth.profileObj.name} src={auth.profileObj.imageUrl} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
              onClick={() => {
                this.props.pushTo('/createEvent');
                this.handleClose();
              }}
            >
              Create New Event
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.props.pushTo('/feedbacks');
                this.handleClose();
              }}
            >
              Send FeedBack
            </MenuItem>
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      );
    return (
      <div style={styles.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Link to="/">
              <IconButton className={classes.brand}>
                <img src="/icon.svg" width="40" height="40" />
              </IconButton>
            </Link>

            <Button
              color="inherit"
              className={classes.title}
              onClick={this.props.pushToHome}
            >
              <Typography variant="title" color="inherit">
                Sasaki Scheduler
              </Typography>
            </Button>

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
