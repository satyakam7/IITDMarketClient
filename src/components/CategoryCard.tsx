import React from 'react'
import {IonCol,IonLabel,IonIcon} from '@ionic/react';
import {laptopOutline} from 'ionicons/icons';

const CategoryCard:React.FC = () => {
    return (
            <IonCol>
              <IonIcon size="large" icon={laptopOutline}/><br/><br/>
              <IonLabel>Laptops</IonLabel>
            </IonCol>
    )

}

export default CategoryCard;