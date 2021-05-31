import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      redirect: false,
    };
  }

  async handleSubmit(target) {
    await movieAPI.createMovie(target);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (<Redirect to="/" />);
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
