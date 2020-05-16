import React, { useState } from 'react';
import {  IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';
import './RegisterForm.css'

const RegisterForm: React.FC = () => {

  const [uname, setUname] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [entryno, setEntryno] = useState<string>();
  const [hostel, setHostel] = useState<string>();

  return (
        <div >
            <IonHeader>
            <IonToolbar>
                <IonTitle>Create an account</IonTitle>
            </IonToolbar>

            </IonHeader>
            
            <div style={{padding:'2em'}}>
            <IonList>
                <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput value={uname} onIonChange={e => setUname(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" value={pass} onIonChange={e => setPass(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Entry Number</IonLabel>
                    <IonInput value={entryno} onIonChange={e => setEntryno(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Hostel</IonLabel>
                    <IonInput value={hostel} onIonChange={e => setHostel(e.detail.value!)} required></IonInput>
                </IonItem>
            </IonList>
            <div className="btn">
            <IonButton color="dark">Register</IonButton>
            </div>
            


            </div>
            
        
        </div>
        );
};

export default RegisterForm;