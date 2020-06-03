import React from 'react';
import { IonPage } from '@ionic/react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

// import { RouteComponentProps } from 'react-router';

const Register: React.FC = () => {
    // state = {
    //     isSignUp: true,
    // };

    return (
        <IonPage>
            <RegisterForm />
        </IonPage>
    );
};

export default Register;
