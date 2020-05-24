import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

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
