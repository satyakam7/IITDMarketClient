import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonText,
    IonIcon,
    IonToolbar,
} from '@ionic/react';
import './ItemCard.css';
import { heartOutline } from 'ionicons/icons';

class ItemCard extends React.Component<any, any> {
    onWishlistClick = () => {
        console.log('Added to wishlist');
    };

    render() {
        const { item } = this.props;
        return (
            <div>
                <IonCard
                    style={{ margin: '0' }}
                    routerLink="/itemdetail"
                    className="item-card"
                >
                    <img src={item.image} alt="cardImg" />
                    <IonCardHeader className="item-card-header">
                        <IonCardSubtitle>
                            <strong>{item.name.toUpperCase()}</strong>
                        </IonCardSubtitle>{' '}
                        {item.category.toUpperCase()}
                        <IonToolbar>
                            Rs.{item.price}
                            <IonIcon
                                icon={heartOutline}
                                slot="end"
                                className="ion-padding"
                                color="danger"
                                onClick={this.onWishlistClick}
                            />
                        </IonToolbar>
                    </IonCardHeader>
                </IonCard>
            </div>
        );
    }
}

export default ItemCard;
