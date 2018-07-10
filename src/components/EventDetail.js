import React, { Component } from 'react';
import EventDetailCard from './EventDetailCard';

export default class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvent(props.match.params.id);
  }

  render() {
    const eventCard =
      Object.keys(this.props.event.event).length == 0 ? null : (
        <EventDetailCard event={this.props.event.event} />
      );
    return (
      <div>
        <h1>EventDetail</h1>
        <h2>ID: {this.props.match.params.id}</h2>
        {eventCard}
      </div>
    );
  }
}
