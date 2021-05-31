import React from 'react';
import PropTypes from 'prop-types';

class ImageWay extends React.Component {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name={ name }
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageWay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageWay;
