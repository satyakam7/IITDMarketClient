import React from 'react';
import {
    IonContent,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonFabList,
    IonHeader,
    IonText,
    IonRow,
    IonCol,
    IonCard,
} from '@ionic/react';
import {
    add,
    notificationsOutline,
    personCircle,
    heart,
    heartOutline,
    heartHalf,
    checkmarkCircle,
    lockClosed,
    analytics,
    ribbon,
    ribbonOutline,
} from 'ionicons/icons';
import './home2.css';
<<<<<<< HEAD
=======
import HeaderCard from '../../components/HeaderCard/HeaderCard';
import ItemList from '../../components/ItemList/ItemList';

>>>>>>> a450edb73287d0882143cea1f855fb4413e2bc4e
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import HeaderCard from '../../components/HeaderCard/HeaderCard';
import ItemList from '../../components/ItemList/ItemList';

import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

class Home extends React.Component<RouteComponentProps & { items: any }, any> {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/state-in-constructor
    state = {
        category: 'all',
    };

    render() {
        return (
            <IonPage>
                <IonHeader className="ion-no-border ">
                    <IonToolbar>
                        <IonIcon
                            size="large"
                            icon={personCircle}
                            color="primary"
                            className="ion-padding"
                        />
                        <IonIcon
                            icon={notificationsOutline}
                            slot="end"
                            color="medium"
                            className="notification-btn"
                        />
                        <IonIcon
                            icon={heartHalf}
                            slot="end"
                            color="danger"
                            className="ion-padding wishlist-btn"
                        />
                    </IonToolbar>
                    <IonToolbar>
                        <SearchBar />
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonRow>
                        <IonCol className="no-padding">
                            <IonCard
                                mode="ios"
                                color="success"
                                className="card"
                                button
                            >
                                <IonIcon
                                    icon={checkmarkCircle}
                                    color="light"
                                    className="card-icon"
                                />
                                <br />
                                <IonText className="card-text">Safe</IonText>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard
                                mode="ios"
                                color="danger"
                                className="card"
                                button
                            >
                                <IonIcon
                                    icon={lockClosed}
                                    color="light"
                                    className="card-icon"
                                />
                                <br />
                                <IonText className="card-text">Secure</IonText>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard
                                mode="ios"
                                color="warning"
                                className="card"
                                button
                            >
                                <IonIcon
                                    icon={analytics}
                                    color="light"
                                    className="card-icon"
                                />
                                <br />
                                <IonText className="card-text">Dynamic</IonText>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard
                                mode="ios"
                                color="tertiary"
                                className="card"
                                button
                            >
                                <IonIcon
                                    icon={ribbonOutline}
                                    color="light"
                                    className="card-icon"
                                />
                                <br />
                                <IonText className="card-text">
                                    Friendly
                                </IonText>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <br />

                    <IonToolbar>
                        <IonText>
                            <h2 className="ion-padding">Choose a category</h2>
                        </IonText>
                        <CategoryCard />
                    </IonToolbar>

                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton>
                            <IonIcon
                                icon={add}
                                onClick={() =>
                                    this.props.history.push('/postad')
                                }
                            />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

const mapStatetoProps = (state: any) => {
    return {
        items: state.item.items,
    };
};

export default connect(mapStatetoProps)(Home);
