import React, { useState } from 'react';
import {  IonHeader, IonTitle, IonToolbar,IonSelect,IonSelectOption, IonInput, IonItem, IonLabel, IonList, IonButton, IonBackButton } from '@ionic/react';
import './RegisterForm.css'

const RegisterForm: React.FC = () => {

  const [uname, setUname] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [entryno, setEntryno] = useState<string>();
  const [hostel, setHostel] = useState<string>();

  return (
        <div >
            <IonToolbar>
                <IonTitle color="primary">Join us today !</IonTitle>
            </IonToolbar>
            <div className="form">
            <IonList >
                <IonItem >
                    <IonLabel color="medium"  position="floating">Username</IonLabel>
                    <IonInput value={uname} onIonChange={e => setUname(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="medium"  position="floating">Password</IonLabel>
                    <IonInput type="password" value={pass} onIonChange={e => setPass(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="medium"  position="floating">Entry Number</IonLabel>
                    <IonInput value={entryno} onIonChange={e => setEntryno(e.detail.value!)} required></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="medium"  position="floating">Hostel</IonLabel>
                    <IonSelect value={hostel} okText="Okay" cancelText="Dismiss" onIonChange={e => setHostel(e.detail.value)}>
                    <IonSelectOption>Aravalli</IonSelectOption>
                    <IonSelectOption>Girnar</IonSelectOption>
                    <IonSelectOption>Jwalamukhi</IonSelectOption>
                    <IonSelectOption>Himadri</IonSelectOption>
                    <IonSelectOption>Zanskar</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </IonList>
            </div>
            <div className="btn">
            <IonButton shape="round" expand="full" color="primary">Register</IonButton>
            </div>
        </div>
        );
};

export default RegisterForm;