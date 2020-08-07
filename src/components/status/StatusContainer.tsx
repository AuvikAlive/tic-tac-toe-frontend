import { connect } from 'react-redux'
import { compose } from 'redux'
import { Game } from 'constants/staticTypes'
import { Status } from './Status'

const mapStateToProps = ({ game }: { game: Game }) => {
  const { mark, winner } = game

  return {
    mark,
    winner,
  }
}

const enhance = compose(connect(mapStateToProps))

export const StatusContainer = enhance(Status)
