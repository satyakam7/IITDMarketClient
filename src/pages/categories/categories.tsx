import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const categories: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonContent>
                <CategoryCard />
            </IonContent>
        </IonPage>
    );
};

export default categories;
