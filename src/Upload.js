import {connect} from 'react-redux'
import UploadButton from './UploadButton'
import { updateFuncs, updateVisibleFuncs} from "./FuncResultsState";

const updateAllFuncs = (funcs)  => {
  return (dispatch, getState) => {
    dispatch(updateVisibleFuncs(funcs))
    dispatch(updateFuncs(funcs))
  }
}

// Ignore all but first file
const getFuncs = (files, dispatch) => {
  const fileReader = new FileReader();
  fileReader.onloadend = (e) => {
    dispatch(updateAllFuncs(e.target.result.split("\n")));
  }
  fileReader.readAsText(files[0])
}

 const mapStateToProps = state => {
   return {}
 }

const mapDispatchToProps = dispatch => {
  return {
    onFileUpload: files => {
      return getFuncs(files, dispatch)
    }
  }
}

const Upload = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadButton)

export default Upload