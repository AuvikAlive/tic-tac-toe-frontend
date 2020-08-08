import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { NewGameButton } from './NewGameButton'

afterEach(cleanup)

const props = {
  resetBoard: () => {},
}

describe('NewGameButton', () => {
  test('that it renders without crashing', () => {
    render(<NewGameButton {...props} />)
  })

  test('that it calls resetBoard onClick', () => {
    const resetBoard = jest.fn()

    const { getByText } = render(<NewGameButton {...{ resetBoard }} />)

    fireEvent.click(getByText('Start a new game'))

    expect(resetBoard).toHaveBeenCalled()
  })
})
