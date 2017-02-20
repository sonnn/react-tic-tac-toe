import React, { PropTypes } from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { display } from 'helpers/BoardHelper';

const iconStyle = {
  cursor: 'pointer',
  display: 'block',
  width: '100%',
  padding: '0.2em',
  textAlign: 'center',
  background: '#eee',
  border: '1px solid #ccc',
  fontSize: '8em'
};

const Position = ({ pos, marker, handleMarkPosition }) =>
(
  <Glyphicon
    style={Object.assign(iconStyle, ({ color: marker === 'O' ? '#DB3A34' : '#197BBD' }))}
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
