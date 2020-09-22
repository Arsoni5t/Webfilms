import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON))
)
);

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))
    )
);

export const logout = () => dispatch => (
    APIUtil.signup()
        .then(user => dispatch(receiveUser()))
);