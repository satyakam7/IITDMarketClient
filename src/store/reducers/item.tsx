import * as actionTypes from '../actions/actionTypes';

const initState = {
    items: [
        {
            _id: '1',
            name: 'Asus Laptop',
            price: 40000,
            category: 'laptop',
            image: { url: '/images/laptop.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
            hostel: 'ZANSKAR',
        },

        {
            _id: '2',
            name: 'Hero Thunderbird',
            price: 4000,
            category: 'bicycle',
            image: { url: '/images/bicycle.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
            hostel: 'SHIVALIK',
        },

        {
            _id: '3',
            name: 'Samsung S10e',
            price: 25000,
            category: 'mobile',
            image: { url: '/images/mobile.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
            hostel: 'KUMAON',
        },

        {
            _id: '4',
            name: 'Kurl On memory foam ',
            price: 2000,
            category: 'matteress',
            image: { url: '/images/matteress.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
            hostel: 'JWALAMUKHI',
        },

        {
            _id: '5',
            name: 'Order of the phoenix',
            price: 300,
            category: 'book',
            image: { url: '/images/book.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
            hostel: 'NILGIRI',
        },
    ],
    category: 'all',
    currentPage: 1,
    pages: null,
    search: '',
    noMatch: null,
    error: null,
    loading: false,
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_FAIL:
            return {
                ...state,
                error: action.err,
                loading: false,
            };
        case actionTypes.ITEM_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.ITEM_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: state.items.map((val) => {
                    // eslint-disable-next-line no-underscore-dangle
                    return val._id === action.id ? action.data : val;
                }),
            };
        case actionTypes.ITEM_SUCCESS:
            return {
                ...state,
                ...action.data,
                category: action.category,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default itemReducer;
