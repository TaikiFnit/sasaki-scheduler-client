import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
    this.props.fetchEvent(props.match.params.id);
  }

  render() {
    console.log('FNIT');
    console.log(this.props);

    return (
      <div>
        <h1>EventDetail</h1>
        <h2>ID: {this.props.match.params.id}</h2>
      </div>
    );
  }
}
