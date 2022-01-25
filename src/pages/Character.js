import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

class Character extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <h1>Character</h1>;
  }
}

export default Character;
