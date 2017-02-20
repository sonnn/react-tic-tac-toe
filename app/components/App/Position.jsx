import React, { PropTypes } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { display } from 'helpers/BoardHelper';

const iconStyle = {
  cursor: 'pointer',
  display: 'block',
  width: '100%',
  padding: '0.2em',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.04)',
  fontSize: '8em'
};

const Position = ({ pos, marker, handleMarkPosition }) =>
(
    <Glyphicon
      style={iconStyle}
      glyph={display(marker)}
      onClick={handleMarkPosition.bind(null, pos)}
    />
);

Position.propTypes = {
  pos: PropTypes.number.isRequired,
  marker: PropTypes.string.isRequired,
  handleMarkPosition: PropTypes.func.isRequired
};

export default Position;
