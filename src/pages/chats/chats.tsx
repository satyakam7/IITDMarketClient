import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import HeaderCard from '../../components/HeaderCard/HeaderCard';

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
