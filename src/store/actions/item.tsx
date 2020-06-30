import qs from 'querystring';
import axios from '../../axios-ins';
import * as actionTypes from './actionTypes';

export const getItemStart = () => ({
    type: actionTypes.ITEM_START,
});

export const getItemSuccess = (data) => ({
    type: actionTypes.ITEM_SUCCESS,
    data,
});

export const getSingleItemSuccess = (data) => ({
    type: actionTypes.ITEM_SINGLE_SUCCESS,
    data,
});

export const postItemStart = () => ({
    type: actionTypes.ITEM_POST_START,
});

export const postItemSuccess = (data) => ({
    type: actionTypes.ITEM_POST_SUCCESS,
    data,
});

export const itemFail = (err) => ({
    type: actionTypes.ITEM_FAIL,
    err,
});

export const editItemStart = () => ({
    type: actionTypes.ITEM_EDIT_START,
});

export const editItemSuccess = (data) => ({
    type: actionTypes.ITEM_EDIT_SUCCESS,
    data,
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

export const resolveItemSuccess = () => ({
    type: actionTypes.ITEM_RESOLVE_SUCCESS,
});

export const getItem = (search, page) => (dispatch) => {
    dispatch(getItemStart());
    axios
        .get(`/item?${search}&${page}`)
        .then((res) => {
            dispatch(getItemSuccess(res.data));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const getItemCat = (search, page, cat) => (dispatch) => {
    dispatch(getItemStart());
    axios
        .get(`/item/cat/${cat}?${search}&${page}`)
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

export const singleItemDetail = (id) => (dispatch) => {
    dispatch(getItemStart());
    axios
        .get(`/item/${id}`)
        .then((res) => {
            dispatch(getSingleItemSuccess(res.data));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const editItem = (data, id) => (dispatch) => {
    dispatch(editItemStart());
    axios
        .put(`/item/${id}`, qs.stringify(data))
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
        .delete(`/item/${id}`)
        .then(() => {
            dispatch(delItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const selliniItem = (id, data) => (dispatch) => {
    dispatch(sellIniItemStart());
    axios
        .patch(`/item/${id}/sellIni`, qs.stringify(data))
        .then(() => {
            dispatch(sellIniItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const sellfniItem = (id, data) => (dispatch) => {
    dispatch(sellFinItemStart());
    axios
        .patch(`/item/${id}/sellFin`, qs.stringify(data))
        .then(() => {
            dispatch(sellFinItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const reportItem = (id) => (dispatch) => {
    axios
        .patch(`/item/${id}/report`)
        .then(() => {
            dispatch(reportItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const resolveItem = (id) => (dispatch) => {
    axios
        .patch(`/item/${id}/resolve`)
        .then(() => {
            dispatch(resolveItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};
