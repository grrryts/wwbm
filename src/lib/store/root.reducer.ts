import coreSlice from './slices/core.slice';
import gameReducer from './slices/game.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  core: coreSlice,
  game: gameReducer,
});

export default rootReducer;
