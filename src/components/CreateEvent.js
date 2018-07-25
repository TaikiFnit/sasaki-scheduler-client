import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  card: {
    minWidth: 275
  },
  root: {
    width: '80%',
    margin: '60px auto'
  },
  typography: {
    marginBottom: 8
  },
  paragraph: {
    fontSize: '18px'
  },
  heading: {
    fontSize: '24px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    //this.props.createEvent(formData this.props.auth.auth);
    this.props.fetchCreateEventData();
  }

  render() {
    const { classes, createEventData } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.typography}
              variant="headline"
              component="h2"
            >
              新規イベント作成
            </Typography>
            <Typography color="textSecondary" className={classes.typography}>
              新たに開催するイベントの情報を入力してください
            </Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="title"
                label="Title"
                className={classes.textField}
                value={createEventData.form.title}
                onChange={this.props.handleFormChange('title')}
                margin="normal"
              />
              <TextField
                id="description"
                label="Description"
                className={classes.textField}
                value={createEventData.form.description}
                onChange={this.props.handleFormChange('description')}
                margin="normal"
              />

              <TextField
                select
                label="Event Type"
                value={createEventData.form.event_type_id}
                className={classes.textField}
                onChange={this.props.handleFormChange('event_type_id')}
                margin="normal"
              >
                {createEventData.eventTypes.map(eventType => (
                  <MenuItem key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateEvent);
