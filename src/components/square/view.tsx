import React from 'react'
import { StyledSquare } from './styled'

type Props = {
  value: string
}

export const Square = ({ value }: Props) => <StyledSquare>{value}</StyledSquare>
