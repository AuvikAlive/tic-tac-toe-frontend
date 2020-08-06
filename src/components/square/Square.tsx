import React from 'react'
import { StyledSquare } from './StyledSquare'

type Props = {
  position: [number, number]
  onClick: (position: [number, number], value: string) => void
  value: string
}

export const Square = ({ position, onClick, value }: Props) => (
  <StyledSquare onClick={() => onClick(position, value)}>{value}</StyledSquare>
)
