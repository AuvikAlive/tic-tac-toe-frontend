import { isNull } from 'lodash'
import { Row, Board, Square } from 'constants/staticTypes'

export const isRowEmpty = (row: Row): boolean =>
  !Boolean(row) || row.every(isNull)

export const getFirstColumn = (board: Board = []) => board.map(row => row[0])

export const getMiddleColumn = (board: Board = []) => board.map(row => row[1])

export const getLastColumn = (board: Board) => board.map(row => row[2])

export const getPrimaryDiagonal = (board: Board) =>
  board.reduce((acc, val, index) => [...acc, val[index]], [])

export const getSecondaryDiagonal = (board: Board) =>
  board.reduce((acc, val, index) => [...acc, val[2 - index]], [])

export const calculateWinner = (board: Board = []): Square => {
  const [row1, row2, row3] = board

  if (!isRowEmpty(row1) && !isRowEmpty(row2) && !isRowEmpty(row3)) {
    const lines = [
      row1,
      row2,
      row3,
      getFirstColumn(board),
      getMiddleColumn(board),
      getLastColumn(board),
      getPrimaryDiagonal(board),
      getSecondaryDiagonal(board),
    ]

    const winner = lines.find(row => row.every(square => square === row[0]))

    return winner ? winner[0] : null
  }

  return null
}
