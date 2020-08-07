import React, { useCallback } from 'react'
import { Square } from 'components/square/Square'
import {
  Board as BoardType,
  Square as Winner,
  Position,
} from 'constants/staticTypes'
import { StyledBoard, StyledRow } from './StyledBoard'

type Props = {
  board: BoardType
  winner: Winner
  markSquare: ({ position }: { position: Position }) => void
  getWinner: () => void
}

export const Board = ({ board, winner, markSquare, getWinner }: Props) => {
  const handleMarkSquare = useCallback(
    (position, currentMark) => {
      if (!winner && !currentMark) {
        markSquare({ position })
        getWinner()
      }
    },
    [getWinner, markSquare, winner],
  )

  return (
    <StyledBoard>
      {board.map((row, rowCount) => (
        <StyledRow key={rowCount}>
          {row.map((square, colCount) => (
            <Square
              data-testid={`${rowCount}-${colCount}`}
              key={rowCount + colCount}
              position={[rowCount, colCount]}
              onClick={handleMarkSquare}
              value={square}
            />
          ))}
        </StyledRow>
      ))}
    </StyledBoard>
  )
}
