import {combineReducers} from "redux";

export const UPDATE_FUNCS = "UPDATE_FUNCTIONS";
export const UPDATE_VISIBLE_FUNCS = "UPDATE_VISIBLE_FUNCTIONS";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY"

const initialState = {
  funcs: [],
  visibleFuncs: [],
  searchRegex: new RegExp(".*", "i")
};

export function updateFuncs(funcs) {
  return {type: UPDATE_FUNCS, funcs}
}

export function updateVisibleFuncs(funcs) {
  return {type: UPDATE_VISIBLE_FUNCS, funcs}
}

export function updateSearchRegex(regex) {
  return {type: UPDATE_SEARCH_QUERY, regex}
}

function funcs(state = initialState.funcs, action) {
  switch (action.type) {
    case UPDATE_FUNCS:
      return action.funcs
    default:
      return state
  }
}

function visibleFuncs(state = initialState.visibleFuncs, action) {
  switch (action.type) {
    case UPDATE_VISIBLE_FUNCS:
      return action.funcs
    default:
      return state
  }
}

function searchRegex(state = initialState.searchRegex, action) {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return action.regex
    default:
      return state
  }
}

export const FuncResultsReducer = combineReducers({
  funcs,
  visibleFuncs,
  searchRegex,
});

