import axios from 'axios';
import * as actionTypes from './actionTypes';

export const miscStart = () => ({
    type: actionTypes.MISC_START,
});

export const miscFail = (err) => ({
    type: actionTypes.MISC_FAIL,
    err: err,
});

export const miscFollow = (category) => ({
    type: actionTypes.MISC_FOLLOW,
    cat: category,
});

export const miscUnfollow = (category) => ({
    type: actionTypes.MISC_UNFOLLOW,
    cat: category,
});

export const miscNotifs = (notifs) => ({
    type: actionTypes.MISC_NOTIFS,
    notifs: notifs,
});

export const miscReport = (rep) => ({
    type: actionTypes.MISC_REPORT,
    report: rep,
});

export const follow = (cat) => (dispatch) => {
    dispatch(miscStart());
    axios
        .patch('/follow/' + cat)
        .then((res) => {
            miscFollow(cat);
        })
        .catch((err) => {
            miscFail(err);
        });
};

export const unfollow = (cat) => (dispatch) => {
    dispatch(miscStart());
    axios
        .patch('/unfollow/' + cat)
        .then((res) => {
            miscUnfollow(cat);
        })
        .catch((err) => {
            miscFail(err);
        });
};

export const notifs = () => (dispatch) => {
    dispatch(miscStart());
    axios
        .get('/notifications')
        .then((res) => {
            dispatch(miscNotifs(res.data));
        })
        .catch((err) => {
            dispatch(miscFail(err));
        });
};

export const report = () => (dispatch) => {
    dispatch(miscStart());
    axios
        .get('/report')
        .then((res) => {
            dispatch(miscReport(res.data));
        })
        .catch((err) => {
            dispatch(miscFail(err));
        });
};
