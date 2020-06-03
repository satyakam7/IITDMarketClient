import React from 'react';
import { withRouter } from 'react-router-dom';
import { IonPage } from '@ionic/react';

const Health: React.FC = () => {
    return (
        <IonPage>
            <p>Ok, Healthy!</p>
        </IonPage>
    );
};

export default withRouter(Health);
