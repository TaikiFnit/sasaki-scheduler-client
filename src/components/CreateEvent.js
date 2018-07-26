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
                label="イベント名"
                className={classes.textField}
                value={createEventData.form.title}
                onChange={this.props.handleFormChange('title')}
                margin="normal"
              />
              <TextField
                rows="8"
                multiline={true}
                id="description"
                label="概要"
                className={classes.textField}
                value={createEventData.form.description}
                onChange={this.props.handleFormChange('description')}
                margin="normal"
              />

              <TextField
                select
                label="イベントタイプ"
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

              <TextField
                id="locale"
                label="開催場所"
                className={classes.textField}
                value={createEventData.form.locale}
                onChange={this.props.handleFormChange('locale')}
                margin="normal"
              />
              <TextField
                id="deadline"
                label="入力期限日"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
                value={createEventData.form.deadline}
                onChange={this.props.handleFormChange('deadline')}
                margin="normal"
              />

              <Typography
                className={classes.sectionHeading}
                variant="headline"
                component="h3"
              >
                開催候補日を選択
              </Typography>

              <div className={classes.rowContainer}>
                <Calendar
                  onChange={this.props.handleDateChange}
                  className={classes.calendar}
                />

                <Paper className={classes.paper}>
                  {createEventData.form.dates.map((date, index) => (
                    <Chip
                      key={index}
                      label={date.prospective_date}
                      className={classes.chip}
                      onDelete={this.props.handleFormArrayRemove(
                        'dates',
                        index
                      )}
                    />
                  ))}
                </Paper>
              </div>

              <Typography
                className={classes.sectionHeadingWithSecondlyText}
                variant="headline"
                component="h3"
              >
                参加者を選択
              </Typography>
              <Typography color="textSecondary" className={classes.typography}>
                参加者を選択すると自動でイベント開催のメールが送信されます.
                参加者を選択しなくても出席登録は可能です.
              </Typography>

              <Paper className={classes.paper}>
                <FormGroup row>
                  {createEventData.users.map((user, index) => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={user.checked}
                            onChange={this.props.handleCheckbox(index)}
                            color="primary"
                            className
                          />
                        }
                        label={user.name}
                      />
                    );
                  })}
                </FormGroup>
              </Paper>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.props.clickedCreate(
                  this.props.createEventData,
                  this.props.auth
                )}
              >
                Create
              </Button>
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
