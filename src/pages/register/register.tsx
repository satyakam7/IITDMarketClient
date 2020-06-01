import React from 'react';
import { IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class Register extends React.Component<RouteComponentProps, any> {
    state = {
        isSignUp: true,
    };

    render() {
        const register = <RegisterForm />;
        return <IonPage>{register}</IonPage>;
    }
}

export default Register;
