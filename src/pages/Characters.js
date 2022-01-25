import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

class Characters extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <h1>Characters</h1>;
  }
}

export default Characters;
