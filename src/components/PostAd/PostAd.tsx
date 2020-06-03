import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './PostAd.css';
import { RouteComponentProps } from 'react-router';
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
    IonContent,
    IonHeader,
    IonButtons,
    IonBackButton,
} from '@ionic/react';

const PostAd: React.FC<RouteComponentProps> = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    return (
        <IonPage>
            <IonContent>
                <IonToolbar>
                    <IonHeader style={{ padding: 0 }}>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="/" />
                            </IonButtons>
                            <IonTitle>Post Your Ad</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                </IonToolbar>
                <div className="form">
                    <IonList>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Name of The Product
                            </IonLabel>
                            <IonInput
                                value={name}
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setName(data);
                                    }
                                }}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Tentative Date of Purchase
                            </IonLabel>
                            <IonInput
                                type="text"
                                value={date}
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setDate(data);
                                    }
                                }}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Condition
                            </IonLabel>
                            <IonInput
                                value={condition}
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setCondition(data);
                                    }
                                }}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Category
                            </IonLabel>
                            <IonSelect
                                value={category}
                                okText="Select"
                                cancelText="Dismiss"
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setCategory(data);
                                    }
                                }}
                            >
                                <IonSelectOption>Laptops</IonSelectOption>
                                <IonSelectOption>Mobile</IonSelectOption>
                                <IonSelectOption>Books</IonSelectOption>
                                <IonSelectOption>Cycle</IonSelectOption>
                                <IonSelectOption>Miscallaneous</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Asking Price
                            </IonLabel>
                            <IonInput
                                value={price}
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setPrice(data);
                                    }
                                }}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Description
                            </IonLabel>
                            <IonInput
                                value={description}
                                onIonChange={(e) => {
                                    const data = e.detail.value;
                                    if (data !== null && data !== undefined) {
                                        setDescription(data);
                                    }
                                }}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <input type="file" />
                        </IonItem>
                    </IonList>
                </div>
                <div className="btn">
                    <IonButton
                        class="regbuttons"
                        shape="round"
                        expand="full"
                        color="primary"
                    >
                        Post
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default PostAd;
