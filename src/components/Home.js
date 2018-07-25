import React, { Component } from 'react';
import HomeEventCard from './HomeEventCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  progress: {
    width: '50px',
    height: '50px'
  },
  container: {
    width: '100%',
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    const circle =
      this.props.events.isFetching === true ? (
        <div style={styles.container}>
          <CircularProgress style={styles.progress} />
        </div>
      ) : null;
    return (
      <div>
        {events.events.map(event => {
          return (
            <HomeEventCard event={event} pushToEvent={this.props.pushToEvent} />
          );
        })}
        {circle}
      </div>
    );
  }
}
