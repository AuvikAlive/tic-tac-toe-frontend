import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { StatusContainer } from 'components/status/StatusContainer'
import { BoardContainer } from 'components/board/BoardContainer'
import { NewGameButtonContainer } from 'components/newGameButton/NewGameButtonContainer'
import { Logs } from 'components/logs/Logs'
import { StyledApp } from './StyledApp'

export const App = () => (
  <Provider {...{ store }}>
    <StyledApp>
      <StatusContainer />
      <BoardContainer />
      <NewGameButtonContainer />
      <Logs />
    </StyledApp>
  </Provider>
)
