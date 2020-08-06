import React from 'react'
import { Square } from 'components'
import { StyledBoard, StyledRow } from './styled'

export const Board = () => (
  <StyledBoard>
    <StyledRow>
      <Square value="X" />
      <Square value="X" />
      <Square value="X" />
    </StyledRow>

    <StyledRow>
      <Square value="X" />
      <Square value="X" />
      <Square value="X" />
    </StyledRow>

    <StyledRow>
      <Square value="X" />
      <Square value="X" />
      <Square value="X" />
    </StyledRow>
  </StyledBoard>
)
