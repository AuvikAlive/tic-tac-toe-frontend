import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { configureAppStore } from 'store'
import { StatusContainer } from 'components/status/StatusContainer'
import { BoardContainer } from 'components/board/BoardContainer'
import { NewGameButtonContainer } from 'components/newGameButton/NewGameButtonContainer'
import { LogsContainer } from 'components/logs/LogsContainer'
import { API } from 'constants/API'
import { initialState } from 'constants/initialState'
import { getJSON } from 'functions/getJSON'
import { StyledApp } from './StyledApp'

export const App = () => {
  const [isStateLoaded, setIsStateLoaded] = useState(false)
  const [preloadedState, setPreloadedState] = useState(initialState)

  useEffect(() => {
    const fetchInitialState = async () => {
      try {
        const result = await getJSON(`${API}/state`)

        setIsStateLoaded(true)
        setPreloadedState(result)
      } catch (error) {
        console.log(error)
      }
    }

    fetchInitialState()
  }, [])

  return isStateLoaded ? (
    <Provider store={configureAppStore(preloadedState)}>
      <StyledApp>
        <StatusContainer />
        <BoardContainer />
        <NewGameButtonContainer />
        <LogsContainer />
      </StyledApp>
    </Provider>
  ) : (
    <StyledApp>loading</StyledApp>
  )
}
