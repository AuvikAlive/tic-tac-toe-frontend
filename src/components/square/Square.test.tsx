import React from 'react'
// @ts-ignore
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Square } from './Square'

afterEach(cleanup)

describe('Square', () => {
  test('that it renders without crashing', () => {
    render(<Square position={[0, 0]} onClick={() => {}} value="X" />)
  })

  test('that it shows the passed in value', () => {
    const value = 'O'

    const { getByText } = render(
      <Square position={[0, 0]} onClick={() => {}} {...{ value }} />,
    )

    expect(getByText(value)).toBeInTheDocument()
  })

  test('that it calls the onClick callback with position & value', () => {
    const position: [number, number] = [1, 1]
    const value = 'X'
    const onClick = jest.fn()

    const { getByText } = render(<Square {...{ onClick, position, value }} />)

    fireEvent.click(getByText(value))

    expect(onClick).toHaveBeenCalled()
    expect(onClick.mock.calls[0][0]).toEqual(position)
    expect(onClick.mock.calls[0][1]).toEqual(value)
  })
})
