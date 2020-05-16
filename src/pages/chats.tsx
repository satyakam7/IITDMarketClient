import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RegisterForm from '../components/RegisterForm'


const chats: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent>
        <RegisterForm />
      </IonContent>
    </IonPage>
  );
};

export default chats;
