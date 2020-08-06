import React, { useState, useCallback } from 'react'
import { chunk } from 'lodash'
import { Square } from 'components'
import { calculateWinner } from 'functions/calculateWinner'
import {
  StyledRoot,
  StyledStatus,
  StyledBoard,
  StyledRow,
  StyledButton,
} from './StyledBoard'

const initialState = chunk(Array(9).fill(null), 3)

export const Board = () => {
  const [board, setBoard] = useState(initialState)
  const [mark, setMark] = useState('X')
  const winner = calculateWinner(board)
  const status = winner ? `Winner: ${winner}` : `Next player: ${mark}`

  const markSquare = useCallback(
    ([clickedRow, clickedCol], currentMark) => {
      if (!winner && !currentMark) {
        const nextMark = mark === 'X' ? 'O' : 'X'

        setBoard(prevState =>
          prevState.map((row, rowCount) =>
            row.map((square, colCount) =>
              rowCount === clickedRow && colCount === clickedCol && !square
                ? mark
                : square,
            ),
          ),
        )

        setMark(nextMark)
      }
    },
    [mark, winner],
  )

  const resetBoard = useCallback(() => {
    setBoard(initialState)
    setMark('X')
  }, [])

  return (
    <StyledRoot>
      <StyledStatus>{status}</StyledStatus>

      <StyledBoard>
        {board.map((row, rowCount) => (
          <StyledRow key={rowCount}>
            {row.map((square, colCount) => (
              <Square
                data-testid={`${rowCount}-${colCount}`}
                key={rowCount + colCount}
                position={[rowCount, colCount]}
                onClick={markSquare}
                value={square}
              />
            ))}
          </StyledRow>
        ))}
      </StyledBoard>

      <StyledButton onClick={resetBoard}>Reset</StyledButton>
    </StyledRoot>
  )
}
