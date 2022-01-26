import React, { Component } from 'react';

import fetchAPI from '../services/api';
import { CHARACTERS } from '../services/endpoints';

import Card from '../components/Card';

class Characters extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.fetchCharactersAPI();
  }

  fetchCharactersAPI = async () => {
    const { results } = await fetchAPI(CHARACTERS);
    this.setState({ results });
  }

  // name, image, species e status.
  render() {
    const { results } = this.state;
    return (
      <div className="listCard">
        { results.map(({ name, image, species, status }) => (
          <Card
            key={ name }
            name={ name }
            image={ image }
            species={ species }
            status={ status }
          />
        ))}
      </div>
    );
  }
}

export default Characters;
