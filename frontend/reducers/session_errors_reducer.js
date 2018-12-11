import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)
  switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
          newState[errors] = action.errors 
          return newState;
      case RECEIVE_CURRENT_USER:
          newState[errors] = null;
          return newState;
      default:
          return state;
  }
}

export default sessionReducer;