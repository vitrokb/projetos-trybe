import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabel extends React.Component {
  render() {
    const { searchText, onChange } = this.props;
    return (
      <label htmlFor="Inclui o texto:" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          value={ searchText }
          onChange={ onChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

TextInputLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputLabel;
