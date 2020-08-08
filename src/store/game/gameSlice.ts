import { createSlice } from '@reduxjs/toolkit'
import { chunk } from 'lodash'
import { Game } from 'constants/staticTypes'
import { calculateWinner } from 'functions/calculateWinner'

export const initialState: Game = {
  board: chunk(Array(9).fill(null), 3),
  mark: 'X',
  winner: null,
}

const { reducer, actions } = createSlice({
  initialState,
  name: 'game',
  reducers: {
    markSquare: (state, { payload }) => {
      const { position } = payload
      const { mark } = state

      const [clickedRow, clickedCol] = position
      const nextMark = mark === 'X' ? 'O' : 'X'

      return {
        ...state,
        board: state.board.map((row, rowCount) =>
          row.map((square, colCount) =>
            rowCount === clickedRow && colCount === clickedCol && !square
              ? mark
              : square,
          ),
        ),
        mark: nextMark,
      }
    },
    resetBoard: () => initialState,
    getWinner: state => ({ ...state, winner: calculateWinner(state.board) }),
  },
})

export const { markSquare, resetBoard, getWinner } = actions

export default reducer
