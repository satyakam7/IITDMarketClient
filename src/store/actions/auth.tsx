import qs from 'querystring';
import * as actionTypes from './actionTypes';
import axios from '../../axios-ins';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
});

export const authSuccess = (data) => ({
    type: actionTypes.AUTH_SUCCESS,
    data,
});

export const authFail = (err) => ({
    type: actionTypes.AUTH_FAIL,
    data: err,
});

export const auth = (data, isSignUp: boolean) => (dispatch) => {
    dispatch(authStart());
    let url = '/login';
    if (isSignUp) {
        url = '/register';
    }
    axios
        .post(url, qs.stringify(data))
        .then((res) => {
            dispatch(authSuccess(res.data));
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};

export const authLogout = () => (dispatch) => {
    axios
        .get('/logout')
        .then((res) => {
            dispatch({ type: actionTypes.AUTH_LOGOUT });
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};
