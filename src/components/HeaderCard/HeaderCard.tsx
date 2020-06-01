import React from 'react';
import {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonButton,
} from '@ionic/react';
import './HeaderCard.css';
import { RouteComponentProps } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const HeaderCard: React.FC<RouteComponentProps> = (props) => {
    const clicked = (route: string) => {
        props.history.push(route);
    };
    return (
        <IonCard color="light">
            <IonCardHeader>
                <IonCardTitle class="heading">Welcome To</IonCardTitle>
                <IonCardTitle class="sub-heading">
                    IITD Marketplace
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent class="sub-title">
                Wanna buy, sell, rent items among IIT Delhi peeps? Dont worry,
                we got you covered !
            </IonCardContent>
            <SearchBar />
            <IonCardContent>
                <IonButton
                    className="reg-btn"
                    onClick={() => clicked('/register')}
                >
                    Sign in to start
                </IonButton>
                <IonButton
                    className="reg-btn"
                    onClick={() => clicked('/login')}
                >
                    Login
                </IonButton>
            </IonCardContent>
        </IonCard>
    );
};

export default HeaderCard;
