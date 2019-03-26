import React from 'react';
import { Card, Rating, Statistic } from 'semantic-ui-react';
import YouTube from '../data/YouTube';

class VideoDetailCard extends React.Component {
  state = {
    rating: 0
  }

  calculateRating = (stats) => {
    var totalRatings = Number(stats.likeCount) + Number(stats.dislikeCount);
    return Math.ceil((stats.likeCount / totalRatings) * 5);
  }

  createDetails = (video) => {
    if (video === undefined) {
      return null;
    } else {
      return (
        <Card fluid header={video.title}
          meta={`Uploaded on ${video.date} by ${video.author}`}
          description={video.description}
          extra={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
              <Statistic label="Views" value={this.props.statistics.viewCount} />
              <Rating rating={this.calculateRating(this.props.statistics)} maxRating={5} size="huge" disabled />
            </div>
          } />
      )
    }
  }

  render() {
    return (
      this.createDetails(this.props.video)
    )
  }
}

export default VideoDetailCard;