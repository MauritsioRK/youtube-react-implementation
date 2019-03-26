import React from 'react';
import { Icon } from 'semantic-ui-react';

class LoadingIcon extends React.Component {

  render() {
    if (this.props.status) {
      return <Icon loading size="huge" name="circle notch" />
    } else {
      return null;
    }
  }
}

export default LoadingIcon;