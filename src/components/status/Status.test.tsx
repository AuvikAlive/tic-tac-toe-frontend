import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Status } from './Status'

afterEach(cleanup)

const props = {
  winner: null,
  mark: 'X',
}

describe('Status', () => {
  test('that it renders without crashing', () => {
    render(<Status {...props} />)
  })

  test('that it shows the correct next player status', () => {
    const { getByText } = render(<Status {...props} />)

    expect(getByText('Next player: X')).toBeInTheDocument()
  })

  test('that it shows the correct winner status', () => {
    const { getByText } = render(<Status winner="O" mark="X" />)

    expect(getByText('Winner: O')).toBeInTheDocument()
  })
})
