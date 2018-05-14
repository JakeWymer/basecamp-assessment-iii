import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';

class App extends Component {
  render() {
    return (
      <div className="App">
        <First />
        <Second />
        <Third />
      </div>
    );
  }
}

export default App;
