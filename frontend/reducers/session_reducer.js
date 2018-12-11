import RECEIVE_CURRENT_USER from '../actions/session_actions';
import LOGOUT_CURRENT_USER from '../actions/session_actions';

export const sessionReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[id] = action.user.id
            return newState
        case LOGOUT_CURRENT_USER:
            newState[id] = null
            return newState
        default:
            return state;
    }
}