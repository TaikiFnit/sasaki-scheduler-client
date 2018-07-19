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
    if (this.props.choice !== changedChoice) {
      if (this.props.dateId !== null) {
        this.props.removeEventDateUser(this.props.dateId);
      }

      this.props.addEventDateUser(changedChoice);
    }
  };

  render() {
    return (
      <Tabs
        value={this.props.choice}
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
