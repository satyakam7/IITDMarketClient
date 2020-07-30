/* eslint-disable no-underscore-dangle */
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

import { getReview } from '../../store/actions/review';
import { singleItemDetail } from '../../store/actions/item';

interface MatchParams {
    id: string;
}

interface ItemDetailProps {
    it: Item;
}

const ItemDetail: React.FC<
    RouteComponentProps<MatchParams> & ItemDetailProps
> = (props) => {
    console.log(props);
    const { it } = props;

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
                            Rs. {it.price} <br />
                            {it.name.toUpperCase()}
                        </IonCardTitle>
                        <IonToolbar style={{ textAlign: 'center' }}>
                            <img src={it.image.url} alt={it.name} />
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonChip outline color="primary">
                            <IonLabel>{it.category}</IonLabel>
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
                        {/* insert :id */}
                        <IonButton
                            href="/chatroom/123"
                            style={{ marginTop: '1em' }}
                            expand="block"
                        >
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
                            <li> {it.condition} </li>
                            <li> Bought on {it.date.toDateString()} </li>
                            <li> {it.description} </li>
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
    const it = items.filter((item) => item._id === id)[0];
    return {
        it,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getReview: (id) => dispatch(getReview(id)),
        singleItemDetail: (id) => dispatch(singleItemDetail(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
