import Moment from 'moment';

class Video {
  constructor(data) {
    this.id = data.id.videoId;
    this.title = data.snippet.title;
    this.author = data.snippet.channelTitle;
    // https://momentjs.com/docs/#/displaying/format/
    this.date = Moment(data.snippet.publishedAt).format("dddd, do of MMMM, YYYY");
    this.description = data.snippet.description;
    this.thumbnail = data.snippet.thumbnails.medium.url;
    this.thumbnailHQ = data.snippet.thumbnails.high.url;
  }
}

export default Video;