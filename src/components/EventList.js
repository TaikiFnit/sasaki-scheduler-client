import React, { Component } from 'react';
import HomeEventCard from './HomeEventCard';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    console.log('FNIT');
    console.log(this.props.events);
    return (
      <div>
        {this.props.events.map(event => {
          return <HomeEventCard event={event} />;
        })}
      </div>
    );
  }
}
