import React from 'react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButton } from '@ionic/react';

const HeaderCard: React.FC = () => {
  return (
        <IonCard color="light" >
          <IonCardHeader >
            <IonCardSubtitle>IIT DELHI</IonCardSubtitle>
            <IonCardTitle>Marketplace</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Wanna buy, sell, rent items among IIT Delhi peeps? Dont worry, we got you covered !
            </IonCardContent>
            <IonCardContent>
            <IonButton href="/register" shape="round" expand="full" color="primary">Sign in to start</IonButton>
            
          </IonCardContent>
          
        </IonCard>

  );
};

export default HeaderCard;