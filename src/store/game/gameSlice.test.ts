import gameReducer, {
  initialState,
  resetBoard,
  markSquare,
  getWinner,
} from './gameSlice'

describe('Game reducer', () => {
  test('that it returns the initial state for unmatching type', () => {
    expect(gameReducer(undefined, { type: '' })).toEqual(initialState)
  })

  test('that it returns the initial state for resetBoard action', () => {
    expect(gameReducer(initialState, resetBoard())).toEqual(initialState)
  })

  test('that it returns correctly updated state for markSquare action', () => {
    const afterFirstMark = gameReducer(
      initialState,
      markSquare({ position: [0, 1] }),
    )

    expect(afterFirstMark).toEqual({
      ...initialState,
      mark: 'O',
      board: [
        [null, 'X', null],
        [null, null, null],
        [null, null, null],
      ],
    })

    const afterSecondMark = gameReducer(
      afterFirstMark,
      markSquare({ position: [2, 2] }),
    )

    expect(afterSecondMark).toEqual({
      ...afterFirstMark,
      mark: 'X',
      board: [
        [null, 'X', null],
        [null, null, null],
        [null, null, 'O'],
      ],
    })
  })

  test('that it returns the correct winner state for getWinner action', () => {
    expect(gameReducer(initialState, getWinner())).toEqual({
      ...initialState,
      winner: null,
    })

    expect(
      gameReducer(
        {
          ...initialState,
          board: [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['X', null, null],
          ],
        },
        getWinner(),
      ),
    ).toEqual({
      ...initialState,
      board: [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', null, null],
      ],
      winner: 'X',
    })
  })
})
