import React from 'react';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
} from '@ionic/react';

import { RouteComponentProps } from 'react-router';
import ChatDashboard from '../../components/ChatDashboard/ChatDashboard';

// import HeaderCard from '../../components/HeaderCard/HeaderCard';

const chats: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader color="primary" style={{ padding: 0 }}>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                        <IonTitle>Chats</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ChatDashboard />
            </IonContent>
        </IonPage>
    );
};

export default chats;
