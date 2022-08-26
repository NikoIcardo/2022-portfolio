
import { createSlice } from '@reduxjs/toolkit'; 

interface GameState {
  requestSent: boolean; 
  gameAccepted: boolean; 
  gameOver: boolean; 
  gameWon: boolean; 
}

interface TypingGameInputs {
  wordsCompleted: number; 
  errors: number; 
}

interface ReducerState {
  gameState: GameState; 
  typingGameInputs: TypingGameInputs; 
}

enum ReducerType {
  REQUEST_GAME, 
  ACCEPT_GAME, 
  INITIALIZE_GAME, 
  REQUEST_START_GAME, 
  START_GAME, 
  UPDATE_GAME_INPUTS, 
  SEND_GAME_INPUTS_TO_SERVER, 
  RECEIVE_GAME_STATE_INPUTS_FROM_SERVER
}

interface GameAction {
  type: ReducerType; 
  data: Partial<ReducerState>
}


// Eventually can add customizeable game inputs etc. 
export default class TypingGameStateReducer {
  private name: string | undefined; 
  constructor(name: string){
    this.name = name; 
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
    }
  }

//  enum ReducerType {
//   REQUEST_GAME, 
//   ACCEPT_GAME, 
//   INITIALIZE_GAME, 
//   REQUEST_START_GAME, 
//   START_GAME, 
//   UPDATE_GAME_INPUTS, 
//   SEND_GAME_INPUTS_TO_SERVER, 
//   RECEIVE_GAME_STATE_INPUTS_FROM_SERVER
// }
 private gameReducer = {  
    [ReducerType.REQUEST_GAME]: () => this.requestGame(), 
    [ReducerType.ACCEPT_GAME]: () => this.acceptGame(), 
    [ReducerType.INITIALIZE_GAME]: () =>  this.initializeGame(),  
    [ReducerType.REQUEST_START_GAME]: () => this.requestStartGame(), 
    [ReducerType.START_GAME]:() => this.startGame(), 
    [ReducerType.UPDATE_GAME_INPUTS]: () => this.updateGameInputs(), 
    [ReducerType.SEND_GAME_INPUTS_TO_SERVER]: () => this.sendGameInputsToServer(), 
    [ReducerType.RECEIVE_GAME_STATE_INPUTS_FROM_SERVER]: () => this.recieveGameStateInputsFromServer(),
  } 

  public getSlice = () => createSlice({
      name: this.name!,
      initialState: this.reducerInitialState, 
      reducers: this.gameReducer, 
    }); 

  /**
   * requestGame - needs to instantiate a socket class which is to be defined. 
   * then needs to initiate a socket request to server to look for game. 
   */
  private requestGame = () => {}

  /**
   * On socket input that game has been accepted, change game accepted
   *
   */
  private acceptGame = () => {}

  /**
   * ensure all game inputs are zeroed. 
   */
  private initializeGame = () => {}

  /**
   * send game request to start game 
   */
  private requestStartGame  = () => {}

  /** 
   * Receive input from server to start game
  */
  private startGame = () => {}

  /**
   * player's updates to game input
   */
  private updateGameInputs = () => {}

  /**
   * update game state to server
   */
  private sendGameInputsToServer = () => {}


  /**
   * Receive and update states from server. 
   */
  private recieveGameStateInputsFromServer = () => {}

}