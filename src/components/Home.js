import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    console.log('FNIT');
    console.log(this.props.events);
    return (
      <table>
        <tbody>
          <tr>
            <th>Event</th>
          </tr>
          {this.props.events.map(event => {
            return (
              <tr>
                <td>{event.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
