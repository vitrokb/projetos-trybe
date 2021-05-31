import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          name={ name }
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
