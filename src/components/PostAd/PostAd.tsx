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
    const [name, setName] = useState<string>();
    const [date, setDate] = useState<string>();
    const [condition, setCondition] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [description, setDescription] = useState<string>();

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
                                onIonChange={(e) => setName(e.detail.value!)}
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
                                onIonChange={(e) => setDate(e.detail.value!)}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Condition
                            </IonLabel>
                            <IonInput
                                value={condition}
                                onIonChange={(e) =>
                                    setCondition(e.detail.value!)
                                }
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
                                onIonChange={(e) => setCategory(e.detail.value)}
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
                                onIonChange={(e) => setPrice(e.detail.value!)}
                                required
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel color="medium" position="floating">
                                Description
                            </IonLabel>
                            <IonInput
                                value={description}
                                onIonChange={(e) =>
                                    setDescription(e.detail.value!)
                                }
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
