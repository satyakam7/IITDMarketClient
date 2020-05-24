import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import CategoryCard from '../components/CategoryCard';

const categories: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <CategoryCard />
            </IonContent>
        </IonPage>
    );
};

export default categories;
