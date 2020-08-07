import { connect } from 'react-redux'
import { compose } from 'redux'
import { resetBoard } from 'store/game/gameSlice'
import { NewGameButton } from './NewGameButton'

const mapDispatchToProps = {
  resetBoard,
}

const enhance = compose(connect(null, mapDispatchToProps))

export const NewGameButtonContainer = enhance(NewGameButton)
