import { chunk } from 'lodash'

export const initialState = {
  game: {
    board: chunk(Array(9).fill(null), 3),
    mark: 'X',
    winner: null,
  },
  log: {
    entries: [],
  },
}
