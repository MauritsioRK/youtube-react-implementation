Based on Stephen Girder's course about React and Redux programming. This is my own variant of the project discussed in Section 11.
Feedback is most welcomed! (And the reason I'm posting this repository.)
I want to improve my coding as much as I can. :)

### Features
I made this project without following Section 11 first, so you will find some differences between my implementation and Stephen's.
I did base it off his general design in Lecture 107.

**Notable differences between my project and Stephen's:**
* You can search on a channel basis and uploader basis. Uploader basis will show top search results from a specific channel.
* Channels won't be accidentally shown in the video search results to the side.
* Clicking a video to the side will swap it with the current main video, not just replace it.
* Additional video statistics are shown, such as upload date, views and rating - the latter based on the old rating system before YouTube switched to likes/dislikes.

### Server Setup
To run the server, use `yarn start`. Obviously, it will require Yarn.
In [src/data/YouTube.js](./src/data/YouTube.js), insert your YouTube Data API v3 key to the API_KEY constant.

Modules used:
* [axios](https://github.com/axios/axios)
* [moment](https://github.com/moment/moment)
* [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React)