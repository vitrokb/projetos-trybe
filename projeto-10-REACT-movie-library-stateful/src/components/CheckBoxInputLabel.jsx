import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInputLabel extends React.Component {
  render() {
    const { bookmarkedOnly, onChange } = this.props;
    return (
      <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

CheckboxInputLabel.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxInputLabel;
