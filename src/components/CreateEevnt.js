import React, { Component } from 'react';

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    //this.props.createEvent(formData this.props.auth.auth);
    this.props.fetchCreateEventData();
  }

  render() {
    return <div>CreateEvent</div>;
  }
}
