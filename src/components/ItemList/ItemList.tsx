import React from 'react';
import { IonSlides, IonRow } from '@ionic/react';
import ItemCard from '../ItemCard/ItemCard';

import { Item } from '../../utils/types';
// import categories from '../../pages/categories/categories';

interface ItemListProps {
    items: Item[];
    category: string;
}
// filter trending offers on the basis of time of the year important ****************************

const ItemList: React.FC<ItemListProps> = (props) => {
    const { items, category } = props;
    const itemList = items.map((item) => {
        if (category === 'all') {
            return (
                <IonSlides key={item.id}>
                    <ItemCard item={item} />
                </IonSlides>
            );
        }
        if (category === item.category) {
            return (
                <IonSlides key={item.id}>
                    <ItemCard item={item} />
                </IonSlides>
            );
        }
        return null;
    });

    return <IonRow className="horizontal-scrolling">{itemList}</IonRow>;
};

export default ItemList;
