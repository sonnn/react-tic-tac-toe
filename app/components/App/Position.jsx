import React, { PropTypes } from 'react'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { display } from 'helpers/BoardHelper'

const Position = ({ pos, marker, handleMarkPosition }) =>
(
  <Button bsSize="large" block onClick={handleMarkPosition.bind(null, pos)}>
    <Glyphicon glyph={display(marker)} />
  </Button>
)

Position.propTypes = {
  pos: PropTypes.number.isRequired,
  marker: PropTypes.string.isRequired,
  handleMarkPosition: PropTypes.func.isRequired
}

export default Position
