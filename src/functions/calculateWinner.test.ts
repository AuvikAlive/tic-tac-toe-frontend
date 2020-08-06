import {
  isRowEmpty,
  getFirstColumn,
  getMiddleColumn,
  getLastColumn,
  getPrimaryDiagonal,
  getSecondaryDiagonal,
  calculateWinner,
} from './calculateWinner'

const drawBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  [null, 'O', null],
]

const xWinnerBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', null],
]

const oWinnerBoard = [
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
  [null, 'X', 'O'],
]

describe('calculateWinner', () => {
  test('that isRowEmpty returns true for empty rows', () => {
    expect(isRowEmpty([])).toBe(true)
    expect(isRowEmpty([null, null, null])).toBe(true)
  })

  test('that getFirstColumn returns the first column', () => {
    expect(getFirstColumn(drawBoard)).toEqual(['X', 'O', null])
    expect(getFirstColumn(xWinnerBoard)).toEqual(['X', 'O', 'X'])
    expect(getFirstColumn(oWinnerBoard)).toEqual(['O', 'X', null])
  })

  test('that getMiddleColumn returns the middle column', () => {
    expect(getMiddleColumn(drawBoard)).toEqual(['O', 'X', 'O'])
    expect(getMiddleColumn(xWinnerBoard)).toEqual(['O', 'X', 'O'])
    expect(getMiddleColumn(oWinnerBoard)).toEqual(['X', 'O', 'X'])
  })

  test('that getLastColumn returns the last column', () => {
    expect(getLastColumn(drawBoard)).toEqual(['X', 'O', null])
    expect(getLastColumn(xWinnerBoard)).toEqual(['X', 'O', null])
    expect(getLastColumn(oWinnerBoard)).toEqual(['O', 'X', 'O'])
  })

  test('that getPrimaryDiagonal returns the primary diagonal elements', () => {
    expect(getPrimaryDiagonal(drawBoard)).toEqual(['X', 'X', null])
    expect(getPrimaryDiagonal(xWinnerBoard)).toEqual(['X', 'X', null])
    expect(getPrimaryDiagonal(oWinnerBoard)).toEqual(['O', 'O', 'O'])
  })

  test('that getSecondaryDiagonal returns the secondary diagonal elements', () => {
    expect(getSecondaryDiagonal(drawBoard)).toEqual(['X', 'X', null])
    expect(getSecondaryDiagonal(xWinnerBoard)).toEqual(['X', 'X', 'X'])
    expect(getSecondaryDiagonal(oWinnerBoard)).toEqual(['O', 'O', null])
  })

  test('that returns null for incomplete board', () => {
    expect(calculateWinner()).toBe(null)
  })

  test('that it returs the correct winner', () => {
    expect(calculateWinner(drawBoard)).toBe(null)
    expect(calculateWinner(xWinnerBoard)).toBe('X')
    expect(calculateWinner(oWinnerBoard)).toBe('O')
  })
})
