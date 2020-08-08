import { combineReducers } from '@reduxjs/toolkit'
import gameReducer from './game/gameSlice'
import logReducer from './log/logSlice'

export const rootReducer = combineReducers({
  game: gameReducer,
  log: logReducer,
})

export type RootState = ReturnType<typeof rootReducer>
