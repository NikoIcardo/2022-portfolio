import { configureStore } from '@reduxjs/toolkit'
import TypingBattleReducer from './reducers/TypingBattleReducer'
// Thunks come preconfigured
export default configureStore({
  reducer: {
    // Add individual reducers here
    TypingBattleReducer, 
  },
})