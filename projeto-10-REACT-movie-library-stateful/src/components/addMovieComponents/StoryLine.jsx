import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name={ name }
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StoryLine;
