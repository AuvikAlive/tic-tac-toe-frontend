import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  test('that it renders without crashing', () => {
    render(<App />)
  })
})
