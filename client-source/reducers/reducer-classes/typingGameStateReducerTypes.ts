// To avoid circulur dependencies
export interface TypingGameInputs {
  wordsCompleted: number;
  errors: number;
}

export interface ReducerState {
  gameState: GameState;
  typingGameInputs: TypingGameInputs;
}

export interface GameAction {
  type: ReducerType;
  data: Partial<ReducerState>;
}

export enum ReducerType {
  REQUEST_GAME = 'REQUEST_GAME',
  ACCEPT_GAME = 'ACCEPT_GAME',
  INITIALIZE_GAME = 'INITIALIZE_GAME',
  REQUEST_START_GAME = 'REQUEST_START_GAME',
  START_GAME = 'START_GAME',
  UPDATE_GAME_INPUTS = 'UPDATE_GAME_INPUTS',
  SEND_GAME_INPUTS_TO_SERVER = 'SEND_GAME_INPUTS_TO_SERVER',
  RECEIVE_GAME_STATE_INPUTS_FROM_SERVER = 'RECEIVE_GAME_STATE_INPUTS_FROM_SERVER',
}

export interface GameState {
  requestSent: boolean;
  gameAccepted: boolean;
  gameOver: boolean;
  gameWon: boolean;
}
