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

import RegisterEventDateForm from '../containers/RegisterEventDateForm';

const styles = {
  card: {
    minWidth: 275
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
  pos: {
    marginBottom: 12
  },
  root: {
    width: '80%',
    margin: '60px auto'
  }
};

function EventDetailCard(props) {
  const { classes, event, auth } = props;
  console.log('FNIFNIF TOOMOTAKA');
  console.log(auth);
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
            {event.title}
          </Typography>
          <Typography component="p" className={classes.typography}>
            {event.description}
          </Typography>

          <Typography color="textSecondary">
            開催場所: {event.locale}
          </Typography>
          <Typography color="textSecondary" className={classes.typography}>
            入力期限日: {event.deadline}
          </Typography>

          <Table className={classes.table}>
            <TableBody>
              {event.event_dates.map(date => {
                const user_id = 'id' in auth.user ? auth.user.id : false;
                const myChoice = date.event_date_users.filter((item, index) => {
                  if (item.user_id === user_id) {
                    return true;
                  }
                });

                const status =
                  myChoice.length == 0 ? false : myChoice[0].status;
                const evenDateUserId =
                  myChoice.length == 0 ? null : myChoice[0].id;

                return (
                  <TableRow>
                    <TableCell>{date.prospective_date}</TableCell>
                    <TableCell>
                      <RegisterEventDateForm
                        status={status}
                        eventDateId={date.id}
                        eventDateUserId={evenDateUserId}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <a href={'/events/' + event.id}>
            <Button size="small">See Detail</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

EventDetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

export default withStyles(styles)(EventDetailCard);
