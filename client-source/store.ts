import { configureStore } from '@reduxjs/toolkit';
import TypingBattleReducer from './reducers/TypingBattleReducer';

// Thunks come preconfigured with redux toolkit
const store = configureStore({
  reducer: {
    // Add individual reducers here
    TypingBattleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
