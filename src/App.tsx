import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import { connect } from 'react-redux';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
    chatboxOutline,
    gridOutline,
    homeOutline,
    personOutline,
    search,
} from 'ionicons/icons';
import Home from './pages/home/home2';
import Categories from './pages/categories/categories';
import Chats from './pages/chats/chats';
import MyAccount from './pages/myaccount/myaccount2';
import EditAccount from './pages/myaccount/editaccount';
/* new imports */
import Register from './pages/register/register';
import Health from './pages/Health/Health';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';
import ChatRoom from './components/ChatRoom/ChatRoom';
import HS from './components/HiddenComponent/HiddenComponent';
import Search from './pages/search/search';
import PostAd from './components/PostAd/PostAd';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { authSuccess } from './store/actions/index';

interface User {
    name: string;
    password: string;
}

type changeUserType = (user: User) => {};

interface AppProps {
    changeUser: changeUserType;
    username: string;
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        const data = {
            username: 'ssh',
            password: '12345',
        };
        axios.post('http://localhost:5000/login', qs.stringify(data));
    }

    render() {
        const { username } = this.props;
        return (
            <IonApp>
                <IonReactRouter>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route path="/register" component={Register} />
                            <Route path="/healthz" component={Health} />
                            <Route path="/home" component={Home} />
                            <Route path="/categories" component={Categories} />
                            <Route path="/chats" component={Chats} />
                            <Route
                                exact
                                path="/myaccount"
                                component={MyAccount}
                            />
                            <Route
                                exact
                                path="/myaccount/edit"
                                component={EditAccount}
                            />
                            <Route path="/postad" component={PostAd} />
                            <Route
                                path="/itemdetail/:id"
                                component={ItemDetail}
                            />
                            <Route
                                path="/category/:categoryname"
                                component={CategoryDetail}
                            />

                            <Route
                                path="/chatroom/:chatid"
                                component={ChatRoom}
                            />
                            <Route
                                path="/search/:searchtext"
                                component={Search}
                            />
                            <Redirect to="/home" />
                        </IonRouterOutlet>
                        {username ? <HS /> : null}
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="home" href="/home">
                                <IonIcon size="small" icon={homeOutline} />
                                <IonLabel>Home</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="categories" href="/categories">
                                <IonIcon size="small" icon={gridOutline} />
                                <IonLabel>Categories</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="chats" href="/chats">
                                <IonIcon size="small" icon={chatboxOutline} />
                                <IonLabel>Chats</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="myaccount" href="/myaccount">
                                <IonIcon size="small" icon={personOutline} />
                                <IonLabel>My Account</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </IonReactRouter>
            </IonApp>
        );
    }
}

const mapStateToProps = (state) => ({
    username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
    changeUser: (data) => dispatch(authSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
