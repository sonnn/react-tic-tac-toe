import React, { PropTypes } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Position from './Position'

const rowStyle = {
  margin: '2em 0'
}

const Board = ({ board, handleMarkPosition }) =>
(
  <Grid>
    <Row style={rowStyle}>
      <Col xs={4}><Position pos={1} marker={board.pos1} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={2} marker={board.pos2} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={3} marker={board.pos3} handleMarkPosition={handleMarkPosition} /></Col>
    </Row>
    <Row style={rowStyle}>
      <Col xs={4}><Position pos={4} marker={board.pos4} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={5} marker={board.pos5} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={6} marker={board.pos6} handleMarkPosition={handleMarkPosition} /></Col>
    </Row>
    <Row style={rowStyle}>
      <Col xs={4}><Position pos={7} marker={board.pos7} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={8} marker={board.pos8} handleMarkPosition={handleMarkPosition} /></Col>
      <Col xs={4}><Position pos={9} marker={board.pos9} handleMarkPosition={handleMarkPosition} /></Col>
    </Row>
  </Grid>
)

Board.propTypes = {
  board: PropTypes.object.isRequired,
  handleMarkPosition: PropTypes.func.isRequired
}

export default Board
