import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

class ItemCard extends React.Component<any, any> {
    render() {
        const { item } = this.props;
        return (
            <div>
                <IonCard style={{ margin: '0' }} routerLink="/itemdetail">
                    <img src={item.image} alt="cardImg" />
                    <IonCardHeader>
                        <IonCardSubtitle>{item.name}</IonCardSubtitle> Rs.{' '}
                        {item.price}
                    </IonCardHeader>
                </IonCard>
            </div>
        );
    }
}

export default ItemCard;
