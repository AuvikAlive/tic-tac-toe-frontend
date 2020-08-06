import React from 'react'
import { render } from '@testing-library/react'
import { Board } from './Board'

describe('Board', () => {
  test('that it renders without crashing', () => {
    render(<Board />)
  })
})
