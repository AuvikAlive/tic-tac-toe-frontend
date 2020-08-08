import { createSlice } from '@reduxjs/toolkit'
import { Log } from 'constants/staticTypes'

export const initialState: Log = {
  entries: [],
}

const { reducer, actions } = createSlice({
  name: 'log',
  initialState,
  reducers: {
    postLog: (state, { payload }) => {
      return { entries: [payload, ...state.entries] }
    },
  },
})

export const { postLog } = actions

export default reducer
