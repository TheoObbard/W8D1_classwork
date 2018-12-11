import RECEIVE_CURRENT_USER from '../actions/session_actions';
import LOGOUT_CURRENT_USER from '../actions/session_actions';

export const sessionReducer = (state = {}, action) {
    Object.freeze(state)
    const newState = Object.assign({})
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
        case LOGOUT_CURRENT_USER:

        default:
            return state;
    }
}