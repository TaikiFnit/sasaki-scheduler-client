import React from 'react';
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
import Badge from '@material-ui/core/Badge';

import RegisterEventDateForm from '../containers/RegisterEventDateForm';

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

function EventDetailCard(props) {
  const { classes, event, auth } = props;
  const deadline = new Date(event.deadline);
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
          <Typography
            component="p"
            className={[classes.typography, classes.paragraph]}
          >
            {event.description}
          </Typography>

          <Typography
            color="textSecondary"
            className={[classes.typography, classes.paragraph]}
          >
            開催場所: {event.locale}
          </Typography>
          <Typography
            color="textSecondary"
            className={[
              classes.typography,
              classes.endOfSection,
              classes.paragraph
            ]}
          >
            入力期限日: {deadline.getFullYear()}/{deadline.getMonth()}/{deadline.getDate()}
          </Typography>

          <Typography
            className={classes.typography}
            variant="title"
            component="h3"
          >
            出席登録
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
                const pro_date = new Date(date.prospective_date);

                return (
                  <TableRow className={classes.prospectiveRow}>
                    <TableCell className={classes.tableCell}>
                      <Typography className={classes.prospectiveDate}>
                        {pro_date.getMonth()}/{pro_date.getDate()}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
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

          <Typography
            className={classes.typography}
            variant="title"
            component="h3"
          >
            出席状況
          </Typography>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>日付</TableCell>
                <TableCell className={classes.tableCell}>参加可</TableCell>
                <TableCell className={classes.tableCell}>未定</TableCell>
                <TableCell className={classes.tableCell}>参加不可</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {event.event_dates.map(date => {
                let usersGroupByStatus = [[], [], []];
                const pro_date = new Date(date.prospective_date);

                date.event_date_users.forEach((elm, index, array) => {
                  usersGroupByStatus[elm.status].push(elm);
                });

                const userChips = usersGroupByStatus.map(users => (
                  <TableCell className={classes.tableCell}>
                    {users.map(user => (
                      <Chip
                        avatar={<Avatar src={user.user.picture} />}
                        label={user.user.name}
                        className={classes.chip}
                      />
                    ))}
                  </TableCell>
                ));

                return (
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      {pro_date.getMonth()}/{pro_date.getDate()}
                    </TableCell>
                    {userChips}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

EventDetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

export default withStyles(styles)(EventDetailCard);
