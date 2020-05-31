import React from 'react';
import { IonCol, IonRow } from '@ionic/react';
import ItemCard from '../ItemCard/ItemCard';
// import categories from '../../pages/categories/categories';

class ItemList extends React.Component<any, any> {
    render() {
        const itemList = this.props.items.map((item) => {
            if (this.props.category === 'all') {
                return (
                    <IonCol size="6" key={item.id}>
                        <ItemCard item={item} />
                    </IonCol>
                );
            }
            if (this.props.category === item.category) {
                return (
                    <IonCol size="6" key={item.id}>
                        <ItemCard item={item} />
                    </IonCol>
                );
            } else {
                return null;
            }
        });

        return <IonRow>{itemList}</IonRow>;
    }
}
export default ItemList;
