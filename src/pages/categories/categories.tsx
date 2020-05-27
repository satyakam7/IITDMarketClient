import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { RouteComponentProps } from 'react-router';

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
