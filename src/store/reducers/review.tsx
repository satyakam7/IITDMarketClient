import * as actionTypes from '../actions/actionTypes';

const initState = {
    loading: false,
    error: null,
    reviews: [
        {
            rating: null,
            author: { username: null, _id: null },
            user: { username: null, _id: null },
            text: '',
            isReported: false,
            isAnonymous: false,
        },
    ],
};

const reviewReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.REVIEW_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.REVIEW_SUCCESS:
            return {
                ...state,
                ...actions.data,
                loading: false,
            };
        case actionTypes.REVIEW_FAIL:
            return {
                ...state,
                error: actions.data,
            };
        case actionTypes.REVIEW_POST_START:
            return {
                ...state,
            };
        case actionTypes.REVIEW_POST_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.REVIEW_EDIT_START:
            return {
                ...state,
            };

        case actionTypes.REVIEW_EDIT_SUCCESS:
            return {
                ...state,
                data: actions.data,
            };
        case actionTypes.REVIEW_DEL_START:
            return {
                ...state,
            };
        case actionTypes.REVIEW_DEL_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.REVIEW_UPVOTE_SUCCESS:
            return {
                ...state,
                data: actions.data,
            };

        case actionTypes.REVIEW_DOWNVOTE_SUCCESS:
            return {
                ...state,
                data: actions.data,
            };

        case actionTypes.REVIEW_REPORT_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.REVIEW_RESOLVE_SUCCESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reviewReducer;
