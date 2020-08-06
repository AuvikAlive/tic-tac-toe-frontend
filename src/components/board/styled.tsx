import styled from 'styled-components'

export const StyledBoard = styled.div`
  width: calc(100vmin * 2 / 3);
  height: calc(100vmin * 2 / 3);
  display: flex;
  border: 1px solid gray;
  flex-wrap: wrap;
`

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
  &:last-child {
    border: none;
  }
`

StyledBoard.displayName = 'StyledBoard'
