import { connect } from 'react-redux'
import FuncResultsList from './FuncResultsList'

const mapStateToProps = state => {
  return {
    visibleFuncs: state.visibleFuncs
  }
}

const VisibleFuncResultsList = connect(
  mapStateToProps,
  () => {return {}},
)(FuncResultsList)

export default VisibleFuncResultsList