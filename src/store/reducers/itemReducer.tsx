const initState = {
    items: [
        {
            id: 1,
            name: 'Asus Laptop',
            price: 40000,
            category: 'laptop',
            image: '/images/laptop.jfif',
        },
        {
            id: 2,
            name: 'Macbook Air',
            price: 60000,
            category: 'laptop',
            image: '/images/laptop.jfif',
        },
        {
            id: 3,
            name: 'Hero Thunderbird',
            price: 4000,
            category: 'bicycle',
            image: '/images/bicycle.jfif',
        },
        {
            id: 4,
            name: 'Decathlon BTWX 100',
            price: 5000,
            category: 'bicycle',
            image: '/images/bicycle.jfif',
        },
        {
            id: 5,
            name: 'Samsung S10e',
            price: 25000,
            category: 'mobile',
            image: '/images/mobile.jfif',
        },
        {
            id: 6,
            name: 'Vivo V15',
            price: 14000,
            category: 'mobile',
            image: '/images/mobile.jfif',
        },
        {
            id: 7,
            name: 'Kurl On memory foam ',
            price: 2000,
            category: 'matteress',
            image: '/images/matteress.jfif',
        },
        {
            id: 8,
            name: 'SleepX',
            price: 1500,
            category: 'matteress',
            image: '/images/matteress.jfif',
        },
        {
            id: 9,
            name: 'Order of the phoenix',
            price: 300,
            category: 'book',
            image: '/images/book.jfif',
        },
        {
            id: 10,
            name: 'Differential Equation - Kreyzig',
            price: 200,
            category: 'book',
            image: '/images/book.jfif',
        },
    ],
}

const itemReducer = (state = initState,action) => {
    return state
}

export default itemReducer