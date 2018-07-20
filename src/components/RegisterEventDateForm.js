import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Clear from '@material-ui/icons/Clear';
import ChangeHistory from '@material-ui/icons/ChangeHistory';
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye';

export default class RegisterEventDateForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, changedChoice) => {
    if (this.props.status !== changedChoice) {
      if (this.props.eventDateUserId !== null) {
        this.props.removeEventDateUser(
          this.props.eventDateUserId,
          this.props.auth.auth,
          this.props.evenId
        );
      }

      this.props.addEventDateUser(
        this.props.eventDateId,
        changedChoice,
        this.props.auth.auth,
        this.props.eventId
      );
    }
  };

  render() {
    return (
      <Tabs
        value={this.props.status}
        onChange={this.handleChange}
        fullWidth
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab icon={<Clear />} label="参加不可" />
        <Tab icon={<ChangeHistory />} label="未定" />
        <Tab icon={<PanoramaFishEye />} label="参加可" />
      </Tabs>
    );
  }
}
