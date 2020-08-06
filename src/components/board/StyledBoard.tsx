import styled from 'styled-components'

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledStatus = styled.div`
  width: calc(100vmin * 2 / 3);
  text-align: center;
  font-size: 3vmin;
`

export const StyledBoard = styled.div`
  width: calc(100vmin * 2 / 3);
  height: calc(100vmin * 2 / 3);
  display: flex;
  border: 1px solid gray;
  flex-wrap: wrap;
  margin-top: 2vmin;
  margin-bottom: 2vmin;
`

export const StyledRow = styled.div`
  width: 100%;
  height: calc(100% / 3);
  display: flex;
  border-bottom: 1px solid gray;
  &:last-child {
    border: none;
  }
`

export const StyledButton = styled.button`
  cursor: pointer;
`

StyledBoard.displayName = 'StyledBoard'
