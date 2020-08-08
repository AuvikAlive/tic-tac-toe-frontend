import { configureStore } from '@reduxjs/toolkit'
import { InitialState } from 'constants/staticTypes'
import { rootReducer as reducer } from './rootReducer'
import { middleware } from './middleware'

export const configureAppStore = (preloadedState: InitialState) => {
  const store = configureStore({
    reducer,
    middleware,
    preloadedState,
  })

  return store
}
