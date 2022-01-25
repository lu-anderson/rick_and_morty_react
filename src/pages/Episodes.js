import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { EPISODES } from '../services/endpoints';

class Episodes extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <h1>Episodes</h1>;
  }
}

export default Episodes;
