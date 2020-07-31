import React from 'react';
import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonCard,
    IonIcon,
} from '@ionic/react';
import './myaccount2.css';
import { RouteComponentProps } from 'react-router';
import {
    createOutline,
    heartHalfOutline,
    addCircleOutline,
    checkmarkCircleOutline,
    callOutline,
    logOutOutline,
} from 'ionicons/icons';
import { connect } from 'react-redux';

interface UserProps {
    avatar: string;
    contact_number: string;
    hostel: string;
    firstName: string;
    lastName: string;
}

const Myaccount: React.FC<RouteComponentProps & UserProps> = (props) => {
    const { firstName, lastName, contact_number } = props;
    return (
        <IonPage>
            <IonContent>
                <div className="container">
                    <IonCard className="profile-header-card">
                        <IonButtons>
                            <IonBackButton style={{}} defaultHref="/" />
                        </IonButtons>
                        <img
                            className="profile-header-img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdc_pViMeba37-qxWAWLBm1Bn5XeQWZoadWA&usqp=CAU"
                            alt="profile"
                        />
                        <h5>
                            {firstName} {lastName}
                        </h5>
                        <p>{contact_number}</p>
                    </IonCard>
                    <IonCard className="profile-menu-card">
                        <IonItem
                            className="profile-menu"
                            onClick={() =>
                                props.history.push('/myaccount/edit')
                            }
                        >
                            <IonIcon
                                color="primary"
                                icon={createOutline}
                                slot="start"
                            />
                            <IonLabel>Edit Profile</IonLabel>
                        </IonItem>
                        <IonItem className="profile-menu">
                            <IonIcon
                                color="primary"
                                icon={heartHalfOutline}
                                slot="start"
                            />
                            <IonLabel>My Wishlist</IonLabel>
                        </IonItem>
                        <IonItem className="profile-menu" href="/myads">
                            <IonIcon
                                color="primary"
                                icon={addCircleOutline}
                                slot="start"
                            />
                            <IonLabel>My Ads</IonLabel>
                        </IonItem>
                        <IonItem
                            className="profile-menu"
                            href="/mytransactions"
                        >
                            <IonIcon
                                color="primary"
                                icon={checkmarkCircleOutline}
                                slot="start"
                            />
                            <IonLabel>My Transactions</IonLabel>
                        </IonItem>
                        <IonItem className="profile-menu">
                            <IonIcon
                                color="primary"
                                icon={callOutline}
                                slot="start"
                            />
                            <IonLabel>Contact Us</IonLabel>
                        </IonItem>
                        <IonItem className="profile-menu" lines="none">
                            <IonIcon
                                color="primary"
                                icon={logOutOutline}
                                slot="start"
                            />
                            <IonLabel>Logout</IonLabel>
                        </IonItem>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

const mapStateToProps = (state) => {
    return {
        avatar: state.auth.avatar,
        contact_number: state.auth.contact_number,

        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
    };
};
export default connect(mapStateToProps)(Myaccount);
