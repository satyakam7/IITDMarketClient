import * as actionTypes from '../actions/actionTypes';

const initState = {
    loading: false,
    error: null,
    username: '',
    avatar: '',
    contact_number: '',
    entry_number: '',
    hostel: '',
    chatPersons: [],
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: false,
    description: '',
    notifs: [],
    reviews: [],
    rating: 0,
    folCategory: [],
    userItems: [],
};

const authReducer = (state = initState, actions) => {
    switch (actions.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                ...actions.data,
                loading: false,
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: actions.data,
            };
        case actionTypes.AUTH_LOGOUT:
            return initState;
        case actionTypes.AUTH_UPDATE:
            return {
                ...state,
                ...actions.data,
            };
        case actionTypes.USER_ITEM:
            return {
                ...state,
                userItems: actions.data,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
