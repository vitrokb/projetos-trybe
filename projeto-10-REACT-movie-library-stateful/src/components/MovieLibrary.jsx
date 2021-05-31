import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieFunc = this.addMovieFunc.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieArray: movies,
      checkSave: '',
      genreSave: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, this.textChangeFilter);
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked }, this.checkboxChangeFilter);
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, this.selectedFilter);
  }

  textChangeFilter() {
    const { searchText, movies } = this.state;
    let arrayToReturn = movies;
    if (searchText) {
      arrayToReturn = arrayToReturn.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)));
    }
    this.setState({ movieArray: arrayToReturn });
  }

  checkboxChangeFilter() {
    const { bookmarkedOnly, movieArray, checkSave } = this.state;
    this.setState({ checkSave: movieArray });
    let arrayToReturn = movieArray;
    if (bookmarkedOnly) {
      arrayToReturn = arrayToReturn
        .filter((movie) => movie.bookmarked === bookmarkedOnly);
    } else {
      arrayToReturn = checkSave;
    }
    this.setState({ movieArray: arrayToReturn });
  }

  selectedFilter() {
    const { selectedGenre, movieArray, genreSave } = this.state;
    this.setState({ genreSave: movieArray });
    let arrayToReturn = movieArray;
    if (selectedGenre !== '') {
      arrayToReturn = arrayToReturn.filter((movie) => movie.genre === selectedGenre);
    } else {
      arrayToReturn = genreSave;
      console.log(arrayToReturn);
    }
    this.setState({ movieArray: arrayToReturn });
  }

  addMovieFunc(obj) {
    const { movieArray } = this.state;
    this.setState({ movieArray: [...movieArray, obj] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movieArray } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movieArray } />
        <AddMovie onClick={ this.addMovieFunc } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
