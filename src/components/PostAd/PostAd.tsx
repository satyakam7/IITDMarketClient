import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './PostAd.css';
// import { RouteComponentProps } from 'react-router';
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

import { connect } from 'react-redux';
import { postItem } from '../../store/actions/item';

import { Item } from '../../utils/types';

type postItemType = (item: Item) => {};
interface PostAdProps {
    postItem: postItemType;
}

class PostAd extends React.Component<PostAdProps, Item> {
    constructor(props) {
        super(props);
        this.state = {
            id: 123,
            name: '',
            date: '',
            condition: '',
            price: '',
            category: '',
            description: '',
            image: '',
        };
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value,
    //     });
    // };

    handleSubmit = (e) => {
        const { postItem } = this.props;
        e.preventDefault();
        const newItem: Item = { ...this.state };
        postItem(newItem);
    };

    render() {
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
                    <form onSubmit={this.handleSubmit}>
                        <IonList>
                            <IonItem>
                                <IonLabel color="medium" position="floating">
                                    Name of The Product
                                </IonLabel>
                                <IonInput
                                    type="text"
                                    id="name"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({ name: data });
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
                                    id="date"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({ name: data });
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
                                    type="text"
                                    id="condition"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({ name: data });
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
                                    id="category"
                                    okText="Select"
                                    cancelText="Dismiss"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({ category: data });
                                        }
                                    }}
                                >
                                    <IonSelectOption>Laptops</IonSelectOption>
                                    <IonSelectOption>Mobile</IonSelectOption>
                                    <IonSelectOption>Books</IonSelectOption>
                                    <IonSelectOption>Cycle</IonSelectOption>
                                    <IonSelectOption>
                                        Miscallaneous
                                    </IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel color="medium" position="floating">
                                    Asking Price
                                </IonLabel>
                                <IonInput
                                    type="text"
                                    id="price"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({ price: data });
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
                                    type="text"
                                    id="description"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({
                                                description: data,
                                            });
                                        }
                                    }}
                                    required
                                />
                            </IonItem>
                        </IonList>

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
                    </form>
                </IonContent>
            </IonPage>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        postItem: (item) => dispatch(postItem(item)),
    };
};

export default connect(null, mapDispatchtoProps)(PostAd);
