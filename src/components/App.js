import React from 'react';
import SearchBar from './SearchBar';
import VideoPane from './VideoPane';
import VideoDetailCard from './VideoDetailCard'
import VideoInfoCard from './VideoInfoCard';
import LoadingIcon from './LoadingIcon'
import ChannelErrorMessage from './ChannelErrorMessage';
import YouTube from '../data/YouTube';
import Video from '../classes/Video'
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    videos: [],
    loading: false,
    error: false,
    statistics: []
  }

  fetchResults = async (value) => {
    this.setState({ videos: [], loading: true, error: false })

    // Get channel ID if user requested to search by channel instead of video
    var requestAdditive = ""
    if (value[1] === "channel") {
      await YouTube.get(`channels?forUsername=${value[0]}&part=id`).then(response => {
        if (response.data.items.length == 0) {
          this.setState({ loading: false, error: true })
        } else {
          requestAdditive = `&channelId=${response.data.items[0].id}`
        }
      })
    }

    if (!this.state.error) {
      // https://developers.google.com/youtube/v3/docs/search/list
      await YouTube.get(`search?q=${value[0]}&type=video&part=snippet${requestAdditive}`).then(response => {
        var parsedItems = Object.values(response.data.items);
        var fetchedItems = [];
        parsedItems.map(result =>
          fetchedItems.push(new Video(result))
        );
        this.setState({ videos: fetchedItems, loading: false });
        this.updateStatistics(this.state.videos[0].id)
      });
    }
  }

  switchVideos = (id) => {
    var swappedItems = this.state.videos;
    var index = swappedItems.indexOf(swappedItems.filter(item => item.id === id)[0])
    var temp = swappedItems[0];
    swappedItems[0] = swappedItems[index];
    swappedItems[index] = temp;
    this.setState({ videos: swappedItems })
    this.updateStatistics(this.state.videos[0].id)
  }

  updateStatistics = (id) => {
    // https://developers.google.com/youtube/v3/docs/videos/list
    YouTube.get(`videos?id=${id}&part=statistics`).then(response => {
      this.setState({ statistics: response.data.items[0].statistics })
    });
  }

  render() {
    return (
      <div style={{ margin: '1% 10%' }}>
        <SearchBar callback={this.fetchResults} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingIcon status={this.state.loading} />
          <ChannelErrorMessage status={this.state.error} />
        </div>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={10}>
              <VideoPane video={this.state.videos[0]} />
              <VideoDetailCard video={this.state.videos[0]} statistics={this.state.statistics} />
            </Grid.Column>
            <Grid.Column width={6}>
              <VideoInfoCard video={this.state.videos[1]} callback={this.switchVideos} />
              <VideoInfoCard video={this.state.videos[2]} callback={this.switchVideos} />
              <VideoInfoCard video={this.state.videos[3]} callback={this.switchVideos} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App;