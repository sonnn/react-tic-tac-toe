import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const MarkerSelectionModal = ({ msg, show, handleResetGame }) =>
(
  <Modal show={show}>
    <Modal.Header>
      <Modal.Title>{msg}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
        <Button bsStyle="primary" onClick={handleResetGame}>Play again!</Button>
    </Modal.Footer>
  </Modal>
);

MarkerSelectionModal.propTypes = {
  msg: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleResetGame: PropTypes.func.isRequired
};

export default MarkerSelectionModal;
