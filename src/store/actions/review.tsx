import axios from '../../axios-ins'
import qs from 'querystring'
import * as actionTypes from './actionTypes'

export const getReviewStart = () => ({
    type: actionTypes.REVIEW_START
})

export const getReviewSuccess = (data) => ({
    type: actionTypes.REVIEW_SUCCESS,
    data: data
})

export const postReviewStart = () => ({
    type: actionTypes.REVIEW_POST_START
})

export const postReviewSuccess = (data) => ({
    type: actionTypes.REVIEW_POST_SUCCESS,
    data: data
})

export const reviewFail = (err) => ({
    type: actionTypes.REVIEW_FAIL,
    err: err
})

export const editReviewStart = () => ({
    type: actionTypes.REVIEW_EDIT_START
})

export const editReviewSuccess = (data) => ({
    type: actionTypes.REVIEW_EDIT_SUCCESS,
    data: data
})

export const delReviewStart = () => ({
    type: actionTypes.REVIEW_DEL_START
})

export const delReviewSuccess = () => ({
    type: actionTypes.REVIEW_DEL_SUCCESS
})

export const upvoteReviewSuccess = () => ({
    type: actionTypes.REVIEW_UPVOTE_SUCCESS
})

export const downvoteReviewSuccess = () => ({
    type: actionTypes.REVIEW_DOWNVOTE_SUCCESS
})

export const reportReviewSuccess = () => ({
    type: actionTypes.REVIEW_REPORT_SUCCESS
})

export const resolveReviewSuccess = () => ({
    type: actionTypes.REVIEW_RESOLVE_SUCCESS
})

export const getReview = (id) => dispatch => {
    dispatch(getReviewStart())
    axios.get('/users/' + id + '/reviews/')
        .then(res => {
            dispatch(getReviewSuccess(res.data))
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const postReview = (data, id) => dispatch => {
    dispatch(postReviewStart())
    axios.post('/users/' + id + '/reviews/', qs.stringify(data))
        .then(res => {
            dispatch(postReviewSuccess(res.data))
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const editReview = (data, id, reviewId) => dispatch => {
    dispatch(editReviewStart())
    axios.put('/users/' + id + '/reviews/'+ reviewId, qs.stringify(data))
        .then(res => {
            dispatch(editReviewSuccess(res.data))
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const delReview = (id, reviewId) => dispatch => {
    dispatch(delReviewStart())
    axios.delete('/users/' + id + '/reviews/'+ reviewId)
        .then(res => {
            dispatch(delReviewSuccess())
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const upvoteReview = (id, reviewId) => dispatch => {
    axios.patch('/users/' + id + '/reviews/'+ reviewId + '/upvote') 
        .then(res => {
            dispatch(upvoteReviewSuccess())
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const downvoteReview = (id, reviewId) => dispatch => {
    axios.patch('/users/' + id + '/reviews/'+ reviewId + '/downvote') 
        .then(res => {
            dispatch(downvoteReviewSuccess())
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const reportReview = (id, reviewId) => dispatch => {
    axios.patch('/users/' + id + '/reviews/'+ reviewId + '/report') 
        .then(res => {
            dispatch(reportReviewSuccess())
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}

export const resolveReview = (id, reviewId) => dispatch => {
    axios.patch('/users/' + id + '/reviews/'+ reviewId + '/resolve') 
        .then(res => {
            dispatch(resolveReviewSuccess())
        })
        .catch(err => {
            dispatch(reviewFail(err))
        })
}