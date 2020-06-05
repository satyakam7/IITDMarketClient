import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonIcon,
    IonToolbar,
} from '@ionic/react';
import './ItemCard.css';
import { heartOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import { Item } from '../../utils/types';

interface ItemCardProps {
    item: Item;
}

class ItemCard extends React.Component<ItemCardProps> {
    onWishlistClick = () => {
        // console.log('Added to wishlist');
    };

    render() {
        const { item } = this.props;
        return (
            <div>
                <IonCard style={{ margin: '0' }} className="item-card">
                    <Link
                        to={`/itemdetail/${item.id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <img src={item.image} alt="cardImg" />
                    </Link>
                    <IonCardHeader className="item-card-header">
                        <Link
                            to={`/itemdetail/${item.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <IonCardSubtitle>
                                <strong>{item.name.toUpperCase()}</strong>
                            </IonCardSubtitle>{' '}
                            {item.category.toUpperCase()}
                        </Link>
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
