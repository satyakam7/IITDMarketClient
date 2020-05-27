import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import HeaderCard from '../../components/HeaderCard/HeaderCard';

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
