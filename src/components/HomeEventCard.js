import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = {
  card: {
    minWidth: 275
  },
  table: {
    marginBottom: '40px',
    fontSize: '18px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  type: {
    marginBottom: 16,
    fontSize: 14
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
  pos: {
    marginBottom: 12
  },
  root: {
    width: '80%',
    margin: '60px auto'
  },
  prospectiveDate: {
    fontSize: '22px',
    borderRadius: '100px',
    background: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
  },
  tableCell: {
    paddingTop: '15px',
    paddingBottom: '15px',
    fontSize: '18px'
  },
  endOfSection: {
    marginBottom: '40px'
  },
  chip: {
    margin: '6px',
    background: '#EEEEEE'
  }
};

function HomeEventCard(props) {
  const { classes, event, pushToEvent, auth } = props;
  const deadline = new Date(event.deadline);
  const donedPersons =
    event.event_dates.length === 0
      ? 0
      : event.event_dates[0].event_date_users.length;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.type} color="textSecondary">
            {event.event_type.name}
          </Typography>
          <Typography
            className={classes.typography}
            variant="headline"
            component="h2"
          >
            「{event.title}」の出席登録受付中
          </Typography>

          <Typography
            color="textSecondary"
            className={[classes.typography, classes.paragraph]}
          >
            入力期限日は {deadline.getFullYear()}/{deadline.getMonth() + 1}/{deadline.getDate()}{' '}
            までです
          </Typography>
          <Typography color="textSecondary" className={classes.paragraph}>
            現在, {event.users.length}人中, {donedPersons}の出席登録が終わりました.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => pushToEvent(event.id)}
          >
            イベントページへ
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

HomeEventCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeEventCard);
