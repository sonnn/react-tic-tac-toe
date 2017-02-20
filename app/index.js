import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import gameStore from './stores/GameStore';
import routers from './config/routes';

// Uncomment to expose globally the gameStore, if you want to play with the console
// window.gameStore = gameStore

ReactDOM.render(
  <Provider gameStore={gameStore}>
    {routers}
  </Provider>,
  document.getElementById('app')
);
