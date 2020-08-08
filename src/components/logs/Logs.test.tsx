import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Logs } from './Logs'

afterEach(cleanup)

const props = {
  entries: [],
}

describe('Logs', () => {
  test('that it renders without crashing', () => {
    render(<Logs {...props} />)
  })
})
