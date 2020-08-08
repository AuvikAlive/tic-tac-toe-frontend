import { getDefaultMiddleware, Middleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { API } from 'constants/API'
import { postJSON } from 'functions/postJSON'
import { postLog } from './log/logSlice'

const logger: Middleware = store => next => action => {
  postJSON(`${API}/log`, action).then(result => next(postLog(result)))
  next(action)
}

export const middleware = [...getDefaultMiddleware(), logger, thunk]
