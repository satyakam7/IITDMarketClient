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
} from '@ionic/react';
import { add, createOutline } from 'ionicons/icons';
import './home.css';
import HeaderCard from '../../components/HeaderCard/HeaderCard';
import ItemList from '../../components/ItemList/ItemList';
// import CategoryCard from '../../components/CategoryCard/CategoryCard';

import { connect } from 'react-redux'

class Home extends React.Component<any,any> {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/state-in-constructor
    state = {
        category: 'all',
    };

    render() {
        return (
            <IonPage>
                <IonContent>
                    <HeaderCard />

                    <IonToolbar style={{ marginBottom: '1em' }}>
                        <IonSegment
                            scrollable
                            onIonChange={(e) =>
                                this.setState({ category: e.detail.value })
                            }
                            color="primary"
                        >
                            <IonSegmentButton value="all">
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="laptop">
                                <IonLabel>Laptops</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="mobile">
                                <IonLabel>Mobiles</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="bicycle">
                                <IonLabel>Bicycles</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="book">
                                <IonLabel>Books</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                    <ItemList items={this.props.items} category={this.state.category} />
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton href="/postad">
                            <IonIcon icon={add} />
                        </IonFabButton>
                        <IonFabList side="start">
                            <IonIcon
                                class="ad"
                                size="large"
                                icon={createOutline}
                            />
                            <IonLabel>Post an Ad</IonLabel>
                        </IonFabList>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

const mapStatetoProps = (state: { item: { items: any; }; }) => {
    return {
        items : state.item.items
    }
}

export default connect(mapStatetoProps)(Home);
