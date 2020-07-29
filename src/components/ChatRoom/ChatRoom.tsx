import React from 'react';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonPage,
    IonMenuButton,
    IonText,
    IonIcon,
    IonFooter,
    IonInput,
    IonButtons,
    IonButton,
} from '@ionic/react';
import { arrowBackOutline, paperPlane } from 'ionicons/icons';
import Message from './Message';

const ChatRoom: React.FC = () => (
    <>
        <IonMenu
            side="end"
            menuId="first"
            contentId="main-content"
            type="overlay"
        >
            <IonContent>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>

        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar
                    color="primary"
                    style={{ padding: '10px', borderRadius: '10px' }}
                >
                    <IonIcon
                        icon={arrowBackOutline}
                        slot="start"
                        color="light"
                    />
                    <IonMenuButton slot="end" menu="first" color="light" />
                    <IonText>Item Name with Username</IonText>

                    <IonButton slot="end" color="secondary">
                        Mark as Sold
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Message />
                <Message />
                <Message />
            </IonContent>
            <IonFooter>
                <IonToolbar
                    style={{ padding: '10px', borderRadius: '10px' }}
                    color="light"
                >
                    <IonInput type="text" placeholder="Type your message" />
                    <IonIcon
                        slot="end"
                        size="large"
                        icon={paperPlane}
                        color="primary"
                    />
                </IonToolbar>
            </IonFooter>
        </IonPage>
    </>
);

export default ChatRoom;
