import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import Board from './App/Board';
import MarkerSelectionModal from './App/MarkerSelectionModal';
import OutcomeModal from './App/OutcomeModal';

const App = observer(({
  board,
  turn,
  markersSelectionModal,
  outcomeModal,
  handleMarkersSelection,
  handleMarkPosition,
  handleResetGame
}) =>
(
  <main id="main">
    <h4>Next move from: {turn}</h4>

    <MarkerSelectionModal
      show={markersSelectionModal.isOpen}
      msg={markersSelectionModal.msg}
      handleMarkersSelection={handleMarkersSelection}
    />

    <OutcomeModal
      show={outcomeModal.isOpen}
      msg={outcomeModal.msg}
      handleResetGame={handleResetGame}
    />

    <Board board={board} handleMarkPosition={handleMarkPosition} />

  </main>
));

App.propTypes = {
  board: PropTypes.object.isRequired,
  turn: PropTypes.string.isRequired,
  markersSelectionModal: PropTypes.object.isRequired,
  outcomeModal: PropTypes.object.isRequired,
  handleMarkersSelection: PropTypes.func.isRequired,
  handleMarkPosition: PropTypes.func.isRequired,
  handleResetGame: PropTypes.func.isRequired
};

export default App;
