import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GifList from './components/GifList';
import Header from './components/Header';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/gifs" component={GifList} />
          <Route path="/gifs/:limit" component={GifList} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
