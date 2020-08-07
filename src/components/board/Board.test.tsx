import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { chunk } from 'lodash'
import { Board as BoardType, Position } from 'constants/staticTypes'
import { Board } from './Board'

afterEach(cleanup)

const props = {
  board: chunk(Array(9).fill(null), 3) as BoardType,
  winner: null,
  markSquare: ({ position }: { position: Position }) => {},
  resetBoard: () => {},
  getWinner: () => {},
}

describe('Board', () => {
  test('that it renders without crashing', () => {
    render(<Board {...props} />)
  })
})
