import React, { useState } from 'react';
import {
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
} from '@ionic/react';
import './RegisterForm.css';

const LoginForm: React.FC = () => {
    const [pass, setPass] = useState<string>();
    const [entryno, setEntryno] = useState<string>();

    return (
        <div>
            <IonToolbar>
                <IonTitle color="primary">Login!</IonTitle>
            </IonToolbar>
            <div className="form">
                <IonList>
                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Username
                        </IonLabel>
                        <IonInput
                            value={entryno}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setEntryno(data);
                                }
                            }}
                            required
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel color="medium" position="floating">
                            Password
                        </IonLabel>
                        <IonInput
                            type="password"
                            value={pass}
                            onIonChange={(e) => {
                                const data = e.detail.value;
                                if (data !== null && data !== undefined) {
                                    setPass(data);
                                }
                            }}
                            required
                        />
                    </IonItem>
                </IonList>
            </div>
            <div className="btn">
                <IonButton shape="round" expand="full" color="primary">
                    Login
                </IonButton>
            </div>
        </div>
    );
};

export default LoginForm;
