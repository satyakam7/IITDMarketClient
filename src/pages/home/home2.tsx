import React from 'react';
import {
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
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
    heartHalf,
    checkmarkCircle,
    lockClosed,
    analytics,
    ribbonOutline,
} from 'ionicons/icons';

import './home2.css';

import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
// import HeaderCard from '../../components/HeaderCard/HeaderCard';
import ItemList from '../../components/ItemList/ItemList';

import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

import { Item } from '../../utils/types';

interface HomeProps {
    items: Item[];
}

class Home extends React.Component<RouteComponentProps & HomeProps> {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/state-in-constructor
    state = {
        category: 'all',
    };

    render() {
        const { category } = this.state;
        const { items, history } = this.props;

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
                    <IonRow className="horizontal-scrolling">
                        <IonCol size="8" className="banner-card">
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
                        <IonCol size="8" className="banner-card">
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

                        <IonCol size="8" className="banner-card">
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
                        <IonCol size="8" className="banner-card">
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
                            <h2 className="ion-padding">
                                <strong>Get Started !</strong>
                            </h2>
                        </IonText>
                        <CategoryCard />
                    </IonToolbar>

                    <IonToolbar>
                        <IonText>
                            <h2 className="ion-padding">
                                <strong>Trending Offers</strong>
                            </h2>
                        </IonText>

                        <ItemList items={items} category={category} />
                    </IonToolbar>

                    <IonToolbar>
                        <IonText>
                            <h2 className="ion-padding">
                                <strong>Offers From your Hostel</strong>
                            </h2>
                        </IonText>

                        <ItemList items={items} category="bicycle" />
                    </IonToolbar>

                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton>
                            <IonIcon
                                icon={add}
                                onClick={() => history.push('/postad')}
                            />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        items: state.item.items,
    };
};

export default connect(mapStatetoProps)(Home);
