import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonChip,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonButton,
    IonText,
} from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { Item } from '../../utils/types';

interface MatchParams {
    id: string;
}

interface ItemDetailProps {
    item: Item;
}

const ItemDetail: React.FC<
    RouteComponentProps<MatchParams> & ItemDetailProps
> = (props) => {
    const { item } = props;
    return (
        <IonPage>
            <IonHeader className="ion-no-border" />
            <IonContent>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardSubtitle />
                        <IonCardTitle
                            style={{ marginBottom: '1em' }}
                            color="primary"
                        >
                            Rs. {item.price} <br />
                        </IonCardTitle>
                        <IonToolbar style={{ textAlign: 'center' }}>
                            <img src={item.image} alt={item.name} />
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonChip outline color="primary">
                            <IonLabel>{item.category}</IonLabel>
                        </IonChip>
                        <IonChip outline color="primary">
                            <IonLabel>tags</IonLabel>
                        </IonChip>
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardSubtitle>Seller Details</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent style={{ textAlign: 'center' }}>
                        <IonText>Seller Name</IonText>
                        <IonText>
                            <h4>
                                {' '}
                                <IonIcon
                                    color="primary"
                                    icon={locationOutline}
                                />{' '}
                                Seller Hostel
                            </h4>
                        </IonText>
                        <IonButton style={{ marginTop: '1em' }} expand="block">
                            Chat With Seller
                        </IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardSubtitle>Product Details</IonCardSubtitle>
                    </IonCardHeader>
                    <IonText>
                        <ul>
                            <li> {item.condition} </li>
                            <li> Bought on {item.date} </li>
                            <li> {item.description} </li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                    </IonText>
                </IonCard>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardSubtitle>Reviews</IonCardSubtitle>
                    </IonCardHeader>
                    <IonText />
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { items } = state.item;
    const item = items ? items[id - 1] : null;
    return {
        item,
    };
};

export default connect(mapStateToProps)(ItemDetail);
