import React from 'react';
import { Embed } from 'semantic-ui-react';

class VideoPane extends React.Component {

  createEmbed = (video) => {
    if (video === undefined) {
      return null;
    } else {
      return (
        <div>
          <Embed source='youtube' id={video.id} placeholder={video.thumbnailHQ} />
        </div>
      )
    }
  }

  render() {
    return this.createEmbed(this.props.video)
  }
}

export default VideoPane;