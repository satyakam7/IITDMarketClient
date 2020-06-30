import qs from 'querystring';
import * as actionTypes from './actionTypes';
import axios from '../../axios-ins';

let changeStream: EventSource;

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

export const authUpdate = (data) => ({
    type: actionTypes.AUTH_UPDATE,
    data,
});

export const userItems = (data) => ({
    type: actionTypes.USER_ITEM,
    data,
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
            changeStream = new EventSource('http://localhost:5000/streamUser');
            dispatch(authSuccess(res.data));
            changeStream.onmessage = (e) => dispatch(authUpdate(e.data));
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};

export const authLogout = () => (dispatch) => {
    dispatch(authStart());
    axios
        .get('/logout')
        .then(() => {
            changeStream.close();
            dispatch({ type: actionTypes.AUTH_LOGOUT });
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};

export const renderUser = (id) => (dispatch) => {
    dispatch(authStart());
    axios
        .get(`/users/${id}`)
        .then((res) => {
            dispatch(authSuccess(res.data.user));
            dispatch(userItems(res.data.item));
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};
