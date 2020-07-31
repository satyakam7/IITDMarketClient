import qs from 'querystring';
import axios from '../../axios-ins';
import * as actionTypes from './actionTypes';

export const itemStart = () => ({
    type: actionTypes.ITEM_START,
});

export const getItemSuccess = (data, category) => ({
    type: actionTypes.ITEM_SUCCESS,
    data,
    category,
});

export const getSingleItemSuccess = (data, id) => ({
    type: actionTypes.ITEM_SINGLE_SUCCESS,
    data,
    id,
});

export const postItemSuccess = (data) => ({
    type: actionTypes.ITEM_POST_SUCCESS,
    data,
});

export const itemFail = (err) => ({
    type: actionTypes.ITEM_FAIL,
    err,
});

export const editItemSuccess = (data) => ({
    type: actionTypes.ITEM_EDIT_SUCCESS,
    data,
});

export const delItemSuccess = () => ({
    type: actionTypes.ITEM_DEL_SUCCESS,
});

export const sellIniItemSuccess = () => ({
    type: actionTypes.ITEM_SELLINI_SUCCESS,
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

export const getItem = (search, page, cat) => (dispatch) => {
    dispatch(itemStart());
    const url =
        cat === 'all'
            ? `/item?${search}&${page}`
            : `/item/cat/${cat}?${search}&${page}`;
    axios
        .get(url)
        .then((res) => {
            dispatch(getItemSuccess(res.data, cat));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const getHostelItem = (hostel) => (dispatch) => {
    dispatch(itemStart());
    const url = `/item/hostel/${hostel}`;
    axios
        .get(url)
        .then((res) => {
            dispatch(getItemSuccess(res.data, 'all'));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const postItem = (data) => (dispatch) => {
    dispatch(itemStart());
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
    dispatch(itemStart());
    axios
        .get(`/item/${id}`)
        .then((res) => {
            dispatch(getSingleItemSuccess(res.data, id));
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const editItem = (data, id) => (dispatch) => {
    dispatch(itemStart());
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
    dispatch(itemStart());
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
    dispatch(itemStart());
    axios
        .patch(`/item/${id}/sellIni`, qs.stringify(data))
        .then(() => {
            dispatch(sellIniItemSuccess());
        })
        .catch((err) => {
            dispatch(itemFail(err));
        });
};

export const sellfinItem = (id, data) => (dispatch) => {
    dispatch(itemStart());
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
