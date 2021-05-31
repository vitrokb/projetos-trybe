import React from 'react';
import PropTypes from 'prop-types';

import TextInputLabel from './TextInputLabel';
import CheckboxInputLabel from './CheckBoxInputLabel';
import SelectGenre from './SelectGenre';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <TextInputLabel
          searchText={ searchText }
          onChange={ onSearchTextChange }
        />
        <CheckboxInputLabel
          bookmarkedOnly={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <SelectGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
