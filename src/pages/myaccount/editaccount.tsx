import React, { useState } from 'react';
import {
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
} from '@ionic/react';
import './editaccount.css';

const EditAccount: React.FC = () => {
    const [fname, setFName] = useState<string>('John');
    const [lname, setLName] = useState<string>('Doe');
    const [email, setEmail] = useState<string>('johndoe@example.com');
    const [contact, setContact] = useState<string>('9999999999');
    const [hostel, setHostel] = useState<string>('Zanskar');

    return (
        <div>
            <IonToolbar>
                <IonTitle color="primary">Edit your details</IonTitle>
            </IonToolbar>
            <div className="form">
                <IonList>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            First Name
                        </IonLabel>
                        <IonInput
                            value={fname}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setFName(data);
                                }
                            }}
                            required
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Last Name
                        </IonLabel>
                        <IonInput
                            value={lname}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setLName(data);
                                }
                            }}
                            required
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Email
                        </IonLabel>
                        <IonInput
                            type="text"
                            value={email}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setEmail(data);
                                }
                            }}
                            required
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Contact Number
                        </IonLabel>
                        <IonInput
                            value={contact}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setContact(data);
                                }
                            }}
                            required
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Hostel
                        </IonLabel>
                        <IonSelect
                            value={hostel}
                            okText="Okay"
                            cancelText="Dismiss"
                            onIonChange={(e) => setHostel(e.detail.value)}
                        >
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
                <IonButton
                    shape="round"
                    expand="full"
                    color="primary"
                    href="/myaccount"
                >
                    Save
                </IonButton>
            </div>
        </div>
    );
};

export default EditAccount;
