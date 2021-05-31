import React from 'react';
import PropTypes from 'prop-types';

import Title from './addMovieComponents/Title';
import Subtitle from './addMovieComponents/Subtitle';
import ImageWay from './addMovieComponents/ImageWay';
import StoryLine from './addMovieComponents/StoryLine';
import Rating from './addMovieComponents/Rating';
import Genre from './addMovieComponents/Genre';
import AddMovieButton from './addMovieComponents/AddMovieButton';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState(({
      [name]: event.target.value,
    }));
  }

  imageCall() {
    const { imagePath } = this.state;
    return (
      <ImageWay
        name="imagePath"
        value={ imagePath }
        handleChange={ this.handleChange }
      />
    );
  }

  storylineCall() {
    const { storyline } = this.state;
    return (
      <StoryLine
        name="storyline"
        value={ storyline }
        handleChange={ this.handleChange }
      />
    );
  }

  subTitleCall() {
    const { subtitle } = this.state;
    return (
      <Subtitle
        name="subtitle"
        value={ subtitle }
        handleChange={ this.handleChange }
      />
    );
  }

  sendButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState(({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { title, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title name="title" value={ title } handleChange={ this.handleChange } />
        {this.subTitleCall()}
        {this.imageCall()}
        {this.storylineCall()}
        <Rating name="rating" value={ rating } handleChange={ this.handleChange } />
        <Genre name="genre" value={ genre } handleChange={ this.handleChange } />
        <AddMovieButton onClick={ this.sendButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
