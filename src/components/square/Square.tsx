import React from 'react'
import { StyledSquare } from './StyledSquare'

type Props = {
  onClick: (position: [number, number], value: string) => void
  position: [number, number]
  value: string
}

export const Square = ({ onClick, position, value, ...rest }: Props) => (
  <StyledSquare onClick={() => onClick(position, value)} {...rest}>
    {value}
  </StyledSquare>
)
