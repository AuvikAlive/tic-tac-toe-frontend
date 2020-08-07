import { connect } from 'react-redux'
import { compose } from 'redux'
import { getWinner, markSquare, resetBoard } from 'store/game/gameSlice'
import { Game } from 'constants/staticTypes'
import { Board } from './Board'

const mapStateToProps = ({ game }: { game: Game }) => {
  const { board, mark, winner } = game

  return {
    board,
    mark,
    winner,
  }
}

const mapDispatchToProps = {
  getWinner,
  markSquare,
  resetBoard,
}

const enhance = compose(connect(mapStateToProps, mapDispatchToProps))

export const BoardContainer = enhance(Board)
