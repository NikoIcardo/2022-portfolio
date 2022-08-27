/**
 * There needs to be a predefined set of actions that can trigger server code without endpoint interaction.
 * These actions will be triggered and will trigger redux state changes which will communicate game details
 * to the front end
 *
 * 1. Request Game
 * 2. Receive Game Accepted
 * 3. Request Start Game
 * 4. Receive Start Game
 * 5. Request Game Input Updates
 * 6. Receive Game Input Updates
 */

import { io, Socket } from 'socket.io-client';
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

import store from '../store';
import { actions as TypingBattleReducerActions } from '../reducers/TypingBattleReducer';
import { TypingGameInputs } from '../reducers/reducer-classes/typingGameStateReducerTypes';

export enum SocketCode {
  REQUEST_GAME = 'REQUEST_GAME',
  RECEIVE_GAME = 'RECEIVE_GAME',
  REQUEST_START_GAME = 'REQUEST_START_GAME',
  RECEIVE_START_GAME = 'RECEIVE_START_GAME',
  REQUEST_GAME_INPUT_UPDATE = 'REQUEST_GAME_INPUT_UPDATE',
  RECEIVE_GAME_INPUT_UPDATE = 'RECEIVE_GAME_INPUT_UPDATE',
}

class TypingGameSocket {
  private socket: Socket | undefined;
  private dispatch: typeof store.dispatch = store.dispatch;
  constructor() {
    this.socket = io('ws://localhost:3001'); // could eventually design some ports in an env. 3001 because the live reload server is on 3000
    this.initializeSocket();
  }

  // Request
  private socketEmissionMapping = {
    [SocketCode.REQUEST_GAME]: () => this.socket?.emit(SocketCode.REQUEST_GAME),
    [SocketCode.REQUEST_START_GAME]: () =>
      this.socket?.emit(SocketCode.REQUEST_START_GAME),
    [SocketCode.REQUEST_GAME_INPUT_UPDATE]: (inputUpdate: TypingGameInputs) =>
      this.socket?.emit(SocketCode.REQUEST_GAME_INPUT_UPDATE, inputUpdate),
  };

  public socketRequest = ({
    socketCode,
    inputUpdate,
  }: {
    socketCode: string;
    inputUpdate?: TypingGameInputs;
  }): void => {
    const emit = this.socketEmissionMapping[socketCode];
    if (inputUpdate) {
      emit(inputUpdate);
    } else {
      emit();
    }
  };

  // Receive - This need to be called in constructor to instantiate them
  private socketReceptionMapping: {
    [code: string]: ActionCreatorWithoutPayload;
  } = {
    [SocketCode.RECEIVE_GAME]: TypingBattleReducerActions.ACCEPT_GAME,
    [SocketCode.RECEIVE_START_GAME]: TypingBattleReducerActions.START_GAME,
    [SocketCode.RECEIVE_GAME_INPUT_UPDATE]:
      TypingBattleReducerActions.RECEIVE_GAME_STATE_INPUTS_FROM_SERVER,
  };
  initializeSocket = () => {
    Object.entries(this.socketReceptionMapping).map(
      ([socketCode, action]: [string, ActionCreatorWithoutPayload]) => {
        this.socket?.on(socketCode, action);
      }
    );
  };
}
