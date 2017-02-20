import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { App } from 'components';

@inject('gameStore') @observer
class AppContainer extends Component {
  constructor (props) {
    super(props);

    this.setMarkersToPlayers = this.setMarkersToPlayers.bind(this);
    this.markPosition = this.markPosition.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  setMarkersToPlayers (marker) {
    const firstPlayerMarkerSymbol = marker;
    const secondPlayerMarkerSymbol = (marker === 'X') ? 'O' : 'X';

    this.props.gameStore.setMarkersToPlayers(firstPlayerMarkerSymbol, secondPlayerMarkerSymbol);
    this.props.gameStore.ui.markersSelectionModal.isOpen = false;
  }

  markPosition (index) {
    if (this.props.gameStore.board[`pos${index}`] === ' ') {
      const marker = this.props.gameStore.markers[this.props.gameStore.ui.turn];
      this.props.gameStore.markPosition(index, marker);
    }
  }

  resetGame () {
    this.props.gameStore.reset();
  }

  render () {
    const { board, ui } = this.props.gameStore;
    const { turn, markersSelectionModal, outcomeModal } = ui;

    return (
      <App
        board={board}
        turn={turn}
        markersSelectionModal={markersSelectionModal}
        outcomeModal={outcomeModal}
        handleMarkersSelection={this.setMarkersToPlayers}
        handleMarkPosition={this.markPosition}
        handleResetGame={this.resetGame}
      />
    );
  }
}

AppContainer.wrappedComponent.propTypes = {
  gameStore: PropTypes.object.isRequired
};

export default AppContainer;
