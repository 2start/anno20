import {connect} from 'react-redux'
import {updateSearchRegex, updateVisibleFuncs} from "./FuncResultsState";
import SearchBar from "./SearchBar";

const filterFromRegex = (searchRegex) => {
  return (func) => {
    if(searchRegex==="") return true
    return func.match(searchRegex) != null
  }
}

const handleQueryUpdate = (query) => {

  return (dispatch, getState) => {
    try {
      const searchRegex = new RegExp(query, "i");
      const queryFilter = filterFromRegex(searchRegex)
      const state = getState()
      const funcs = state.funcs

      const visibleFuncs = funcs.filter(func => queryFilter(func))
      dispatch(updateVisibleFuncs(visibleFuncs))
      dispatch(updateSearchRegex(searchRegex))
    } catch(e) {
      console.error("Invalid Pattern.")
    }

  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onQueryUpdate: (query) => {
      dispatch(handleQueryUpdate(query))
    }
  }
}

const SearchBarUpdate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)

export default SearchBarUpdate