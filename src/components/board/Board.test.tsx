import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Board } from './Board'

afterEach(cleanup)

describe('Board', () => {
  test('that it renders without crashing', () => {
    render(<Board />)
  })

  test('that clicking a square adds the correct mark', () => {
    const { getByTestId } = render(<Board />)
    const firstSquare = getByTestId('0-0')
    const secondSquare = getByTestId('0-1')
    const thirdSquare = getByTestId('0-2')

    fireEvent.click(firstSquare)
    fireEvent.click(secondSquare)
    fireEvent.click(thirdSquare)

    expect(firstSquare.textContent).toEqual('X')
    expect(secondSquare.textContent).toEqual('O')
    expect(thirdSquare.textContent).toEqual('X')
  })
})
