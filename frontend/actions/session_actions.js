// receiveErrors(errors) (regular action creator)
import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => {
    return SessionApiUtil.login(user).then(
        (user) => dispatch(receiveCurrentUser(user))
    )
};

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER, 
        currentUser
    }
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(
        () => dispatch(logoutCurrentUser())
    )
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user).then(
        (user) => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON)))
    )
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS, 
        errors
    }
}
