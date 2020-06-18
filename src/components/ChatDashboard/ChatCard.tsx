import React from 'react';
import { Link } from 'react-router-dom';
import './Chats.css';
import { IonItem, IonAvatar, IonLabel, IonText, IonCard } from '@ionic/react';

const ChatCard: React.FC = () => {
    return (
        <div>
            <IonCard className="chat-card" button>
                <Link to="/chatroom/123" style={{ textDecoration: 'none' }}>
                    <IonItem lines="none" style={{ padding: '3px' }}>
                        <IonAvatar slot="start">
                            <img src="" alt="" />
                        </IonAvatar>
                        <IonLabel>
                            <h3>Item Name</h3>
                            <p>User : </p>
                        </IonLabel>
                    </IonItem>
                </Link>
                <h4 className="chat-status">
                    STATUS : <IonText color="success">ACTIVE</IonText>
                </h4>
            </IonCard>
            <IonCard className="chat-card" button>
                <IonItem lines="none" style={{ padding: '3px' }}>
                    <IonAvatar slot="start">
                        <img src="" alt="" />
                    </IonAvatar>
                    <IonLabel>
                        <h3>Item Name</h3>
                        <p>User : </p>
                    </IonLabel>
                </IonItem>
                <h4 className="chat-status">
                    STATUS : <IonText color="danger">INACTIVE</IonText>
                </h4>
            </IonCard>
        </div>
    );
};

export default ChatCard;
