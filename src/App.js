import React, { Component } from 'react';
import GifList from './components/GifList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GifList />
      </div>
    );
  }
}

export default App;
