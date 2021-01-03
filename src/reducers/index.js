import { combineReducers } from "redux";

export const SOLUTION_LOADED = 'SOLUTION_LOADED';

const solution = {};

function solutionReducer(state = solution, action) {
  switch (action.type) {
    case SOLUTION_LOADED:
      return {...action.solution};

    default:
      return state;
  }
}

const reducer = combineReducers({ solutionReducer });

export default reducer;