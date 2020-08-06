import styled from 'styled-components'

export const StyledSquare = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  font-size: 7vmin;
  cursor: pointer;

  &:last-child {
    border: none;
  }
`

StyledSquare.displayName = 'StyledSquare'
