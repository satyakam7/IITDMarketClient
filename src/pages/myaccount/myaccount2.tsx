import React from 'react';
import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonCard,
    IonIcon,
} from '@ionic/react';
import './myaccount2.css';
import { RouteComponentProps } from 'react-router';
import {
    createOutline,
    heartHalfOutline,
    addCircleOutline,
    checkmarkCircleOutline,
    callOutline,
    logOutOutline,
} from 'ionicons/icons';

const Myaccount: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="container">
                <IonCard className="profile-header-card">
                    <IonButtons>
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <img
                        className="profile-header-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU"
                        alt="profile"
                    />
                    <h5>John Doe</h5>
                    <p>+91-9999999999</p>
                </IonCard>
                <IonCard className="profile-menu-card">
                    <IonItem className="profile-menu" href="/myaccount/edit">
                        <IonIcon
                            color="primary"
                            icon={createOutline}
                            slot="start"
                        />
                        <IonLabel>Edit Profile</IonLabel>
                    </IonItem>
                    <IonItem className="profile-menu">
                        <IonIcon
                            color="primary"
                            icon={heartHalfOutline}
                            slot="start"
                        />
                        <IonLabel>My Wishlist</IonLabel>
                    </IonItem>
                    <IonItem className="profile-menu">
                        <IonIcon
                            color="primary"
                            icon={addCircleOutline}
                            slot="start"
                        />
                        <IonLabel>My Ads</IonLabel>
                    </IonItem>
                    <IonItem className="profile-menu">
                        <IonIcon
                            color="primary"
                            icon={checkmarkCircleOutline}
                            slot="start"
                        />
                        <IonLabel>My Transactions</IonLabel>
                    </IonItem>
                    <IonItem className="profile-menu">
                        <IonIcon
                            color="primary"
                            icon={callOutline}
                            slot="start"
                        />
                        <IonLabel>Contact Us</IonLabel>
                    </IonItem>
                    <IonItem className="profile-menu" lines="none">
                        <IonIcon
                            color="primary"
                            icon={logOutOutline}
                            slot="start"
                        />
                        <IonLabel>Logout</IonLabel>
                    </IonItem>
                </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Myaccount;
