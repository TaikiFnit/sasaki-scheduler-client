import React, { Component } from 'react';
import HomeEventCard from './HomeEventCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    console.log('FNIT');
    console.log(this.props.events);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Event</th>
            </tr>
            {this.props.events.map(event => {
              return <HomeEventCard event={event} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
