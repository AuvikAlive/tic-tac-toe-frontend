import React, { useCallback } from 'react'
import { StyledNewGameButton } from './StyledNewGameButton'

type Props = {
  resetBoard: () => void
}

export const NewGameButton = ({ resetBoard }: Props) => {
  const handleResetBoard = useCallback(() => resetBoard(), [resetBoard])

  return (
    <StyledNewGameButton onClick={handleResetBoard}>
      Start a new game
    </StyledNewGameButton>
  )
}
