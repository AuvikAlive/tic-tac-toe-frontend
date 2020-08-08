import { connect } from 'react-redux'
import { compose } from 'redux'
import { Log } from 'constants/staticTypes'
import { Logs } from './Logs'

const mapStateToProps = ({ log }: { log: Log }) => {
  const { entries } = log

  return { entries }
}

const enhance = compose(connect(mapStateToProps))

export const LogsContainer = enhance(Logs)
