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
import Calendar from 'react-calendar';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
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
  subheading: {
    marginTop: '10px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  rowContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexSirection: 'row'
  },
  chip: {
    margin: theme.spacing.unit
  },
  paper: {
    minHeight: '50px',
    width: '100%',
    flex: 1,
    padding: '5px'
  },
  calendar: {
    marginRight: '30px'
  },
  sectionHeading: {
    fontSize: '18px',
    marginTop: '40px',
    marginBottom: '20px'
  },
  sectionHeadingWithSecondlyText: {
    fontSize: '18px',
    marginTop: '40px'
  },
  button: {
    marginTop: '80px'
  }
});

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCreateEventData();
  }

  render() {
    const { classes, createEventData, feedBack, auth } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.typography}
              variant="headline"
              component="h2"
            >
              イベントに関するフィードバックを送る
            </Typography>
            <Typography color="textSecondary" className={classes.typography}>
              来年度のイベント幹事に向けて,
              フィードバックならぬフィードフォワードを送れます.<br />
              ここに入力した内容は, あなたの名前と共に,
              イベント作成時に表示されます.
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                select
                label="イベントタイプ"
                value={feedBack.event_type_id}
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
              <TextField
                rows="12"
                multiline={true}
                id="description"
                label="概要"
                className={classes.textField}
                value={feedBack.body}
                onChange={this.props.handleFormChange('body')}
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.postFeedBack(
                  this.props.feedBack,
                  auth.auth
                )}
              >
                フィードフォワードを送る
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Feedback);
