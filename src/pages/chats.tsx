import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import HeaderCard from '../components/HeaderCard';

const chats: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <HeaderCard />
            </IonContent>
        </IonPage>
    );
};

export default chats;
