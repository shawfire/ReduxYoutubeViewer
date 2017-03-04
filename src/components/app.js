// Note: Cmd Alt i - Opens up console window in Chrome
//  Select console - JS tab - to see errors
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeachBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list'

const API_KEY = 'AIzaSyDsbto07LyNzMzrPG8LPycHfuJ2pdPnh8o';

// Create a new compoent.
//  This component should produce some HTML.
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'DanielShawMusicMan'}, (videos) => {
      console.log(videos);
      this.setState({ videos });
      // this.setState({ videos: videos })
    });
  }
  // JSX - What looks like HTML in our JavaScript
  //  this code get s transpiled with babel to produce JS
  //  i.e. babeljs.io/repl
  render() {
    return (
      <div>
        <div>React Youtube Viewer</div>
        <SeachBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
