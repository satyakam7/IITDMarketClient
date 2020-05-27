import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonToolbar,
} from '@ionic/react';
import './myaccount.css';
import HeaderCard from '../../components/HeaderCard/HeaderCard';
import { RouteComponentProps } from 'react-router';

const myaccount: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <br /> <br />
                    <div className="user">
                        <IonItem detail={false}>
                            <IonLabel>Guest User</IonLabel>
                            <IonThumbnail slot="start">
                                <img
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                            </IonThumbnail>
                        </IonItem>
                    </div>
                    <br />
                    <br />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <HeaderCard {...props} />
            </IonContent>
        </IonPage>
    );
};

export default myaccount;
