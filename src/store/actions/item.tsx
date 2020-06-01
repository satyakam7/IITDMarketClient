import qs from 'querystring';
import axios from '../../axios-ins';
import * as actionTypes from './actionTypes';
import qs from 'querystring';

export const getItemStart = () => ({
    type: actionTypes.ITEM_START,
});

export const getItemSuccess = (data) => ({
    type: actionTypes.ITEM_SUCCESS,
    data: data,
});

export const postItemStart = () => ({
    type: actionTypes.ITEM_POST_START,
});

export const postItemSuccess = (data) => ({
    type: actionTypes.ITEM_POST_SUCCESS,
    data: data,
});

export const itemFail = (err) => ({
    type: actionTypes.ITEM_FAIL,
    err: err,
});

export const editItemStart = () => ({
    type: actionTypes.ITEM_EDIT_START,
});

export const editItemSuccess = (data) => ({
    type: actionTypes.ITEM_EDIT_SUCCESS,
    data: data,
});

export const delItemStart = () => ({
    type: actionTypes.ITEM_DEL_START,
});

export const delItemSuccess = () => ({
    type: actionTypes.ITEM_DEL_SUCCESS,
});

export const sellIniItemStart = () => ({
    type: actionTypes.ITEM_SELLINI_START,
});

export const sellIniItemSuccess = () => ({
    type: actionTypes.ITEM_SELLINI_SUCCESS,
});

export const sellFinItemStart = () => ({
    type: actionTypes.ITEM_SELLFIN_START,
});

export const sellFinItemSuccess = () => ({
    type: actionTypes.ITEM_SELLFIN_SUCCESS,
});

export const reportItemSuccess = () => ({
    type: actionTypes.ITEM_REPORT_SUCCESS,
});

export const getItem = () => (dispatch) => {
    dispatch(getItemStart());
    axios
        .get('/item')
        .then((res) => {
            dispatch(getItemSuccess(res.data));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const postItem = (data) => (dispatch) => {
    dispatch(postItemStart());
    axios
        .post('/item', qs.stringify(data))
        .then((res) => {
            dispatch(postItemSuccess(res.data));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const editItem = (data, id) => (dispatch) => {
    dispatch(editItemStart());
    axios
<<<<<<< HEAD
        .put(`/item/${id}`, qs.stringify(data))
=======
        .put('/item/' + id, qs.stringify(data))
>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
        .then((res) => {
            dispatch(editItemSuccess(res.data));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const delItem = (id) => (dispatch) => {
    dispatch(delItemStart());
    axios
<<<<<<< HEAD
        .delete(`/item/${id}`)
=======
        .delete('/item/' + id)
>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
        .then((res) => {
            dispatch(delItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const selliniItem = (id, data) => (dispatch) => {
    dispatch(sellIniItemStart());
    axios
<<<<<<< HEAD
        .patch(`/item/${id}/sellIni`, qs.stringify(data))
=======
        .patch('/item/' + id + '/sellIni', qs.stringify(data))
>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
        .then((res) => {
            dispatch(sellIniItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const sellfniItem = (id, data) => (dispatch) => {
    dispatch(sellFinItemStart());
    axios
<<<<<<< HEAD
        .patch(`/item/${id}/sellFin`, qs.stringify(data))
=======
        .patch('/item/' + id + '/sellFin', qs.stringify(data))
>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
        .then((res) => {
            dispatch(sellFinItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const reportItem = (id) => (dispatch) => {
    axios
<<<<<<< HEAD
        .patch(`/item/${id}/report`)
=======
        .patch('/item/' + id + '/report')
>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
        .then((res) => {
            dispatch(reportItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};
