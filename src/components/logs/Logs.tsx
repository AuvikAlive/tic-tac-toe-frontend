import React from 'react'
import { Action } from '@reduxjs/toolkit'
import { StyledLogs } from './StyledLogs'

type Props = {
  entries: Action[]
}

export const Logs = ({ entries }: Props) => (
  <StyledLogs>
    {entries.map((action, index) => (
      <div key={action.type + index}>{JSON.stringify(action, null, 2)}</div>
    ))}
  </StyledLogs>
)
