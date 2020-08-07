import React from 'react'
import { Position, Square as Value } from 'constants/staticTypes'
import { StyledSquare } from './StyledSquare'

type Props = {
  onClick: (position: Position, value: Value) => void
  position: [number, number]
  value: Value
}

export const Square = ({ onClick, position, value, ...rest }: Props) => (
  <StyledSquare onClick={() => onClick(position, value)} {...rest}>
    {value}
  </StyledSquare>
)
