import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import Home from './pages/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          {/* <Switch> */}
          <Route path="/" component={ Home } />
          <Route path="/characters" component={ Characters } />
          <Route path="/locations" component={ Locations } />
          <Route path="/episodes" component={ Episodes } />
          {/* </Switch> */}
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
