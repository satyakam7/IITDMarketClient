import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import HeaderCard from '../../components/HeaderCard/HeaderCard';
import { RouteComponentProps } from 'react-router';

const chats: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonContent>
                <HeaderCard {...props} />
            </IonContent>
        </IonPage>
    );
};

export default chats;
