import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { LOCATIONS } from '../services/endpoints';

class Locations extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <h1>Location</h1>;
  }
}

export default Locations;
