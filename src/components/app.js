// Note: Cmd Alt i - Opens up console window in Chrome
//  Select console - JS tab - to see errors
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeachBar from './search_bar';

const API_KEY = 'AIzaSyDsbto07LyNzMzrPG8LPycHfuJ2pdPnh8o';

// Create a new compoent.
//  This component should produce some HTML.
export default class App extends Component {
  // JSX - What looks like HTML in our JavaScript
  //  this code get s transpiled with babel to produce JS
  //  i.e. babeljs.io/repl
  render() {
    return (
      <div>
        <div>React Youtube Viewer</div>
        <div><SeachBar /></div>
      </div>
    );
  }
}
