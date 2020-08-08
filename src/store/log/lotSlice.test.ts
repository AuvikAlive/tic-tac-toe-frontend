import logReducer, { initialState, postLog } from './logSlice'

describe('Log reducer', () => {
  test('that it returns the initial state for unmatching type', () => {
    expect(logReducer(undefined, { type: '' })).toEqual(initialState)
  })

  test('that it returns correctly updated state for postLog action', () => {
    const markSquare = {
      type: 'game/markSquare',
      payload: { position: [0, 0] },
    }

    const stateAfterMarkSquare = logReducer(initialState, postLog(markSquare))

    expect(stateAfterMarkSquare).toEqual({ entries: [markSquare] })

    const getWinner = { type: 'game/getWinner' }
    const stateAfterGetWinner = logReducer(
      stateAfterMarkSquare,
      postLog(getWinner),
    )

    expect(stateAfterGetWinner).toEqual({ entries: [getWinner, markSquare] })
  })
})
