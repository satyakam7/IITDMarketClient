export interface Item {
    _id: string;
    name: string;
    price: string;
    category: string;
    date: Date;
    condition: string;
    description: string;
    image: { url: string };
    imageList: { url: string }[];
    anonymous: boolean;
}

export interface User {
    name: string;
}
