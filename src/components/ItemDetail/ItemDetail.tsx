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

const ItemDetail: React.FC = () => {
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
                            Rs. 40000
                        </IonCardTitle>
                        <IonToolbar style={{ textAlign: 'center' }}>
                            <img src="/images/laptop.jfif" alt="" />
                        </IonToolbar>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonChip outline color="primary">
                            <IonLabel>Electronics</IonLabel>
                        </IonChip>
                        <IonChip outline color="primary">
                            <IonLabel>Laptops</IonLabel>
                        </IonChip>
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios">
                    <IonCardHeader>
                        <IonCardSubtitle>Seller Details</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent style={{ textAlign: 'center' }}>
                        <IonText>N. Satwik</IonText>
                        <IonText>
                            <h4>
                                {' '}
                                <IonIcon
                                    color="primary"
                                    icon={locationOutline}
                                />{' '}
                                Zanskar House
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
                            <li>4 months old</li>
                            <li>8 GB RAM, 512 GB SSD, i5 9th gen</li>
                            <li>RGB keyboard</li>
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

export default ItemDetail;
