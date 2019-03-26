import React from 'react';
import { Card } from 'semantic-ui-react';

class VideoInfoCard extends React.Component {
  renderInfo = (video) => {
    if (video === undefined) {
      return null;
    } else {
      return (
        <Card fluid
          // https://stackoverflow.com/questions/49481691/semantic-ui-react-list-onclick-declaration
          onClick={e => this.props.callback(video.id)}
          image={video.thumbnail}
          header={video.title}
          meta={video.author} />
      )
    }
  }

  render() {
    return (
      this.renderInfo(this.props.video)
    )
  }
}

export default VideoInfoCard;