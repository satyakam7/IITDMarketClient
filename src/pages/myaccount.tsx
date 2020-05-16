import React from 'react';
import { IonContent,IonButton,IonIcon,IonHeader, IonPage, IonItem,IonLabel,IonThumbnail, IonToolbar } from '@ionic/react';
import './myaccount.css'

const myaccount: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br/> <br/>
          <div className='user'> 
          <IonItem detail={false}>
            
            <IonLabel>
              Guest User
              <p>Login now</p>
            </IonLabel>
            
            
            <IonThumbnail slot="start">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </IonThumbnail>
          </IonItem> 
          </div>
          <br/><br/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='buttons'>
          <IonButton > Click here to Register ! </IonButton><br/>
          <IonButton size="small" fill="outline">Already have an account ? Login</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default myaccount;
