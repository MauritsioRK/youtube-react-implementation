import React from 'react';
import { Segment } from 'semantic-ui-react';

class ChannelErrorMessage extends React.Component {

  render() {
    if (this.props.status) {
      return <Segment style={{ fontSize: "20px" }}>We couldn't find that channel! It probably does not exist.</Segment>
    } else {
      return null;
    }
  }
}

export default ChannelErrorMessage;