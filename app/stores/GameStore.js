import { observable, action } from 'mobx';
import { isEmpty } from 'helpers/BoardHelper';
import _ from 'lodash';

const BOARD_WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

class GameStore {
  @observable board = {
    pos1: ' ',
    pos2: ' ',
    pos3: ' ',
    pos4: ' ',
    pos5: ' ',
    pos6: ' ',
    pos7: ' ',
    pos8: ' ',
    pos9: ' '
  }

  @observable markers = {
    player1: null,
    player2: null
  }

  @observable ui = {
    turn: 'player1',
    markersSelectionModal: {
      isOpen: true,
      msg: 'Player 1, please choose your marker.'
    },
    outcomeModal: {
      isOpen: false,
      msg: ''
    }
  }

  @action setMarkersToPlayers (firstPlayerMarker, secondPlayerMarker) {
    this.markers.player1 = firstPlayerMarker;
    this.markers.player2 = secondPlayerMarker;
  }

  @action markPosition (index, marker) {
    this.board[`pos${index}`] = marker;
    this.changePlayerTurn();
    this.checkBoardForWinner();
  }

  @action changePlayerTurn () {
    this.ui.turn = (this.ui.turn === 'player1') ? 'player2' : 'player1';
  }

  @action displayOutcome (msg) {
    this.ui.outcomeModal.isOpen = true;
    this.ui.outcomeModal.msg = msg;
  }

  @action reset () {
    this.board = {
      pos1: ' ',
      pos2: ' ',
      pos3: ' ',
      pos4: ' ',
      pos5: ' ',
      pos6: ' ',
      pos7: ' ',
      pos8: ' ',
      pos9: ' '
    };

    this.markers = {
      player1: null,
      player2: null
    };

    this.ui = {
      turn: 'player1',
      markersSelectionModal: {
        isOpen: true,
        msg: 'Player 1, please choose your marker.'
      },
      outcomeModal: {
        isOpen: false,
        msg: ''
      }
    };
    this.winner = null;
  }

  checkBoardForWinner () {
    if (this.isBoardEmpty() && this.winner === null) {
      // If board is full and there is no winner, then it's a tie
      this.displayOutcome("It's a tie!");
    } else {
      // Check for a winning line
      this.winningLine();
    }
  }

  isBoardEmpty () {
    return !_(this.board).values().includes(' ');
  }

  winningLine () {
    BOARD_WINNING_LINES.forEach((winningLine) => {
      const [num1, num2, num3] = winningLine;
      // Check if winning line values are not empty AND they all match
      // we have a winner and display the outcome
      if (
        this.linePositionsAreNotEmpty(winningLine) &&
        this.board[`pos${num1}`] === this.board[`pos${num2}`] &&
        this.board[`pos${num2}`] === this.board[`pos${num3}`] &&
        this.board[`pos${num1}`] === this.board[`pos${num3}`]
      ) {
        const winningMarker = this.board[`pos${num1}`];
        this.winner = this.selectPlayerFromMarker(winningMarker);
        this.displayOutcome(`${this.winner} wins!`);
      }
    });
  }

  selectPlayerFromMarker (marker) {
    return _.findKey(this.markers, (val) => { return val === marker; });
  }

  linePositionsAreNotEmpty (line) {
    const [num1, num2, num3] = line;
    return !(isEmpty(this.board[`pos${num1}`]) && isEmpty(this.board[`pos${num2}`]) && isEmpty(this.board[`pos${num3}`]));
  }

}

const gameStore = new GameStore();

export default gameStore;
export { GameStore };
