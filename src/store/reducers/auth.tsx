import * as actionTypes from '../actions/actionTypes';

const initState = {
    _id: null,
    loading: false,
    error: null,
    username: 'johndoe',
    avatar: 'https://w3schools/avatar.jpeg',
    contact_number: '9808779509',
    entry_number: '2019cs10050',
    hostel: 'Zanskar',
    chatPersons: [],
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    isAdmin: false,
    description: 'Student at IITD',
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
        case actionTypes.MISC_NOTIFS:
            return {
                ...state,
                notifs: actions.notifs,
            };
        case actionTypes.AUTH_UPDATED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
