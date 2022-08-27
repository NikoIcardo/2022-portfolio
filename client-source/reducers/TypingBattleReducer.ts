import TypingGameStateReducer from './reducer-classes/TypingGameStateReducer';
const TypingBattleReducer = new TypingGameStateReducer('Typing Battle');
export const actions = TypingBattleReducer.getActions();
export default TypingBattleReducer.getReducer();
