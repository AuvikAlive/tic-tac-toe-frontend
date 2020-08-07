import React from 'react'
import { Square, Mark } from 'constants/staticTypes'
import { StyledStatus } from './StyledStatus'

type Props = {
  winner: Square
  mark: Mark
}

export const Status = ({ winner, mark }: Props) => {
  const status = winner ? `Winner: ${winner}` : `Next player: ${mark}`

  return <StyledStatus>{status}</StyledStatus>
}
