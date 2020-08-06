import React from 'react'
import { render } from '@testing-library/react'
import { Square } from './Square'

describe('Square', () => {
  test('that it renders without crashing', () => {
    render(<Square value="X" index={0} onClick={() => {}} />)
  })

  test('that it renders shows the passed in value', () => {
    const value = 'O'

    const { getByText } = render(
      <Square index={0} onClick={() => {}} {...{ value }} />,
    )

    expect(getByText(value)).toBeInTheDocument()
  })
})
