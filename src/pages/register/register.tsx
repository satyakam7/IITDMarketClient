import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

class Register extends React.Component<RouteComponentProps, any> {
    state = {
        isSignUp: true,
    };
    render() {
        let register = <RegisterForm />;
        return <IonPage>{register}</IonPage>;
    }
}

export default Register;
