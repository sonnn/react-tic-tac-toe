import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const MarkerSelectionModal = ({ msg, show, handleMarkersSelection }) =>
(
  <Modal show={show}>
    <Modal.Header>
      <Modal.Title>{msg}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button bsStyle="primary" bsSize="large" onClick={handleMarkersSelection.bind(null, 'X')}>
        <Glyphicon glyph="remove" />
      </Button>
      <Button bsStyle="primary" bsSize="large" onClick={handleMarkersSelection.bind(null, 'O')}>
        <Glyphicon glyph="record" />
      </Button>
    </Modal.Footer>
  </Modal>
);

MarkerSelectionModal.propTypes = {
  msg: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleMarkersSelection: PropTypes.func.isRequired
};

export default MarkerSelectionModal;
