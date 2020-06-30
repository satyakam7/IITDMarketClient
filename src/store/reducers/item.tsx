const initState = {
    items: [
        {
            id: 1,
            name: 'Asus Laptop',
            price: 40000,
            category: 'laptop',
            image: { url: '/images/laptop.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
        },

        {
            id: 2,
            name: 'Hero Thunderbird',
            price: 4000,
            category: 'bicycle',
            image: { url: '/images/bicycle.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
        },

        {
            id: 3,
            name: 'Samsung S10e',
            price: 25000,
            category: 'mobile',
            image: { url: '/images/mobile.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
        },

        {
            id: 4,
            name: 'Kurl On memory foam ',
            price: 2000,
            category: 'matteress',
            image: { url: '/images/matteress.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
        },

        {
            id: 5,
            name: 'Order of the phoenix',
            price: 300,
            category: 'book',
            image: { url: '/images/book.jfif' },
            date: new Date('01/01/2020'),
            condition: 'Excellent',
            description: 'Demo description',
        },
    ],
    category: 'all',
    page: 1,
    search: '',
};

const itemReducer = (state = initState) => {
    return state;
};

export default itemReducer;
