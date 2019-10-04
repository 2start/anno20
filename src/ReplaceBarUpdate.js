import {connect} from 'react-redux'
import {updateFuncs, updateVisibleFuncs} from "./FuncResultsState";
import ReplaceBar from "./ReplaceBar";


const buildReplacer = (searchRegex, replaceQuery) => {
  return (func) => {
    const matches = func.match(searchRegex)
    if (matches === null) return func

    let result = replaceQuery
    matches[0] = func
    for (var i=0; i<matches.length; i++) {
      result = replaceQuery.replace("\\" + i, matches[i])
    }

    return result
  }
}

const handleReplace = (replaceQuery) => {
  return (dispatch, getState) => {
    try {
      const state = getState()
      const visibleFuncs = state.visibleFuncs
      const funcs = state.funcs
      const searchRegex = state.searchRegex

      const replace = buildReplacer(searchRegex, replaceQuery)

      const replacedVisibleFuncs = visibleFuncs.map(func => replace(func))
      const replacedFuncs = funcs.map(func => replace(func))

      dispatch(updateVisibleFuncs(replacedVisibleFuncs))
      dispatch(updateFuncs(replacedFuncs))
    } catch(e) {
      console.error(e)
    }
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    handleKeyPress: (e) => {
      if (e.key === 'Enter') {
        dispatch(handleReplace(e.target.value))
      }
    }
  }
}

const ReplaceBarUpdate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReplaceBar)

export default ReplaceBarUpdate