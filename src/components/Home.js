import React, { Component } from 'react';
import HomeEventCard from './HomeEventCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    const { events, router } = this.props;
    return (
      <div>
        {events.events.map(event => {
          return (
            <HomeEventCard event={event} pushToEvent={this.props.pushToEvent} />
          );
        })}
      </div>
    );
  }
}
