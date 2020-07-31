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
    IonPage,
} from '@ionic/react';
import './editaccount.css';
import { connect } from 'react-redux';
import { userUpdate } from '../../store/actions/auth';

interface UserProps {
    userUpdate: (
        id,
        fname,
        lname,
        email,
        entry_number,
        hostel,
        contact,
        username,
        description,
        avatar
    ) => void;
    id: string;
    username: string;
    avatar: string;
    contact_number: string;
    entry_number: string;
    hostel: string;
    firstName: string;
    lastName: string;
    email: string;
    description: string;
}
const EditAccount: React.FC<UserProps> = (props) => {
    const { firstName } = props;
    console.log(props);
    const [fname, setFName] = useState<string>(firstName);
    const [lname, setLName] = useState<string>('Doe');
    const [email, setEmail] = useState<string>('johndoe@example.com');
    const [contact, setContact] = useState<string>('9999999999');
    const [hostel, setHostel] = useState<string>('Zanskar');
    const updateProfile = () => {
        props.userUpdate(
            props.id,
            fname,
            lname,
            email,
            props.entry_number,
            hostel,
            contact,
            props.username,
            props.description,
            props.avatar
        );
    };
    return (
        <IonPage>
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
                            <IonSelectOption>Kailash</IonSelectOption>
                            <IonSelectOption>Udaigiri</IonSelectOption>
                            <IonSelectOption>Karakoram</IonSelectOption>
                            <IonSelectOption>Nilgiri</IonSelectOption>
                            <IonSelectOption>Vindhyachal</IonSelectOption>

                            <IonSelectOption>Shivalik</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </div>
            <div className="btn">
                <IonButton
                    className="button"
                    shape="round"
                    expand="full"
                    color="primary"
                    href="/myaccount"
                    onClick={updateProfile}
                >
                    Save
                </IonButton>
            </div>
        </IonPage>
    );
};
const mapStateToProps = (state) => {
    return {
        id: state.auth._id,
        username: state.auth.username,
        avatar: state.auth.avatar,
        contact_number: state.auth.contact_number,
        entry_number: state.auth.entry_number,
        hostel: state.auth.hostel,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        email: state.auth.email,
        description: state.auth.description,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        userUpdate: (
            id,
            firstName,
            lastName,
            email,
            entry_number,
            hostel,
            contact_number,
            username,
            description,
            avatar
        ) => {
            dispatch(
                userUpdate(
                    id,
                    firstName,
                    lastName,
                    email,
                    entry_number,
                    hostel,
                    contact_number,
                    username,
                    description,
                    avatar
                )
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
