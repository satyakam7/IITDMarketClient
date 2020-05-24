import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const ItemCard: React.FC = () => {
    return (
        <IonItem href="#">
            <IonLabel>
                Hero thunderbird
                <p>Rs.2500</p>
                <p>Zanskar</p>
            </IonLabel>
            <IonThumbnail slot="start">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </IonThumbnail>
        </IonItem>
    );
};

export default ItemCard;
