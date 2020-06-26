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
    IonIcon,
    IonCheckbox,
    IonText,
} from '@ionic/react';

import { connect } from 'react-redux';
import { addCircle } from 'ionicons/icons';
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
            id: 10,
            name: '',
            date: new Date('00/00/0000'),
            condition: '',
            price: '',
            category: '',
            description: '',
            image: { url: '' },
            imageList: [{ url: '' }],
            anonymous: false,
        };
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value,
    //     });
    // };

    /* addImage = () => {
        const { image, imageList } = this.state;
        this.setState({ imageList : [...imageList,image]} )
    } */

    /* addImageField = () => {

    } */

    handleSubmit = (e) => {
        const { postItem: postitem } = this.props;
        e.preventDefault();
        // console.log(this.state);
        const newItem: Item = { ...this.state };
        postitem(newItem);
    };

    handleImageInputChange = (e, index) => {
        const { imageList } = this.state;
        const { name, value } = e.target;
        const list = [...imageList];
        list[index][name] = value;
        this.setState({ imageList: list });
    };

    handleAddClick = () => {
        const { imageList } = this.state;
        const list = [...imageList];
        list.push({ url: '' });
        this.setState({ imageList: list });
    };

    render() {
        const { imageList } = this.state;
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
                            <br />
                            <IonItem>
                                <IonLabel color="medium">
                                    Date of Purchase
                                </IonLabel>
                                <IonInput
                                    type="date"
                                    id="date"
                                    onIonChange={(e) => {
                                        const data = e.detail.value;
                                        if (
                                            data !== null &&
                                            data !== undefined
                                        ) {
                                            this.setState({
                                                date: new Date(data),
                                            });
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
                                            this.setState({ condition: data });
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
                            <br />

                            {imageList.map((x, i) => {
                                return (
                                    <IonItem>
                                        <IonLabel color="medium">
                                            Image Link{' '}
                                        </IonLabel>
                                        <IonInput
                                            name="url"
                                            value={x.url}
                                            onIonChange={(e) =>
                                                this.handleImageInputChange(
                                                    e,
                                                    i
                                                )
                                            }
                                        />
                                        <IonIcon
                                            icon={addCircle}
                                            slot="end"
                                            onClick={this.handleAddClick}
                                        />
                                    </IonItem>
                                );
                            })}
                            <br />

                            <IonItem>
                                <IonCheckbox
                                    color="dark"
                                    onIonChange={(e) =>
                                        this.setState({
                                            anonymous: e.detail.checked,
                                        })
                                    }
                                />
                                <IonLabel color="medium">
                                    Post Anonymously
                                </IonLabel>
                            </IonItem>
                        </IonList>

                        <br />
                        <br />

                        <IonToolbar>
                            <IonText>
                                Disclaimer: IITD Market has a strict moderation
                                policy against items prohitbited in the
                                institute. Such items will be taken down and the
                                user will be banned from the app permanently
                            </IonText>
                        </IonToolbar>

                        <div className="btn">
                            <IonButton
                                onClick={this.handleSubmit}
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
