import { createSlice, Slice } from '@reduxjs/toolkit';
import {
  TypingGameInputs,
  ReducerState,
  ReducerType,
} from './typingGameStateReducerTypes';

import TypingGameSocket, {
  SocketCode,
} from '../../client-sockets/TypingGameSocket';
import { Socket } from 'socket.io-client';

// Eventually can add customizeable game inputs etc to create different games with this class.
export default class TypingGameStateHandler {
  private name: string | undefined;
  private slice: Slice | undefined;
  private gameSocket: TypingGameSocket | undefined;
  constructor(name: string) {
    this.name = name;
    this.slice = createSlice({
      name: this.name!,
      initialState: this.reducerInitialState,
      reducers: this.gameReducer,
    });
    this.gameSocket = new TypingGameSocket();
  }

  /**
   * GameFlow
   * 1. player -> Request Game -> server
   * 2. server -> gameAccepted
   * 3. Game is initialized
   * 4. Request Start Game -> server
   * 5. server -> start game
   * 6. player -> UpdateGame Inputs -> sendGameInputsToServer
   * 7. server -> receiveGameStateInputsFromServer
   */

  private reducerInitialState: ReducerState = {
    gameState: {
      requestSent: false,
      gameAccepted: false,
      gameOver: true,
      gameWon: false,
    },
    typingGameInputs: {
      wordsCompleted: 0,
      errors: 0,
    },
  };

  private gameReducer = {
    [ReducerType.REQUEST_GAME]: () => this.requestGame(),
    [ReducerType.ACCEPT_GAME]: () => this.acceptGame(),
    [ReducerType.INITIALIZE_GAME]: () => this.initializeGame(),
    [ReducerType.REQUEST_START_GAME]: () => this.requestStartGame(),
    [ReducerType.START_GAME]: () => this.startGame(),
    [ReducerType.UPDATE_GAME_INPUTS]: () => this.updateGameInputs(),
    [ReducerType.SEND_GAME_INPUTS_TO_SERVER]: () =>
      this.sendGameInputsToServer(),
    [ReducerType.RECEIVE_GAME_STATE_INPUTS_FROM_SERVER]: () =>
      this.recieveGameStateInputsFromServer(),
  };

  public getReducer = () => this.slice!.reducer;

  public getActions = () => this.slice!.actions;

  /**
   * requestGame - need to instantiate a socket class which is to be defined.
   * then needs to initiate a socket request to server to look for game.
   */
  private requestGame = () => {
    this.gameSocket?.socketRequest[SocketCode.REQUEST_GAME];
    return {};
  };

  /**
   * On socket input that game has been accepted, change game accepted
   *
   */
  private acceptGame = () => {};

  /**
   * ensure all game inputs are zeroed.
   */
  private initializeGame = () => {};

  /**
   * send game request to start game
   */
  private requestStartGame = () => {};

  /**
   * Receive input from server to start game
   */
  private startGame = () => {};

  /**
   * player's updates to game input
   */
  private updateGameInputs = () => {};

  /**
   * update game state to server
   */
  private sendGameInputsToServer = () => {};

  /**
   * Receive and update states from server.
   */
  private recieveGameStateInputsFromServer = () => {};
}
