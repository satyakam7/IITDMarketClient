import * as actionTypes from '../actions/actionTypes';

const initState = {
    loading: false,
    error: null,
    followCategories: [],
};

const miscReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.MISC_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.MISC_FAIL:
            return {
                ...state,
                error: actions.data,
            };
        case actionTypes.MISC_FOLLOW:
            return {
                ...state,
            };
        case actionTypes.MISC_UNFOLLOW:
            return {
                ...state,
            };

        case actionTypes.MISC_NOTIFS:
            return {
                ...state,
                notifs: actions.notifs,
            };

        case actionTypes.MISC_REPORT:
            return {
                ...state,
                report: actions.report,
            };

        default:
            return state;
    }
};

export default miscReducer;
