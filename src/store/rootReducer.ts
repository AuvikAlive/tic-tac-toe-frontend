import { combineReducers } from '@reduxjs/toolkit'
import gameReducer from './game/gameSlice'

export const rootReducer = combineReducers({
  game: gameReducer,
})
