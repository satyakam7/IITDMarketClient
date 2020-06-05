import React from 'react';
import {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    IonChip,
} from '@ionic/react';
import {
    bicycle,
    laptopOutline,
    phonePortraitOutline,
    tabletLandscapeOutline,
    bookOutline,
    constructOutline,
} from 'ionicons/icons';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

const CategoryCard: React.FC = () => (
    <IonGrid>
        <IonRow>
            <IonCol className="chip-col" size="6">
                <Link to="/category/laptop" style={{ textDecoration: 'none' }}>
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon
                            icon={laptopOutline}
                            size="large"
                            color="secondary"
                        />
                        <IonText color="dark">
                            <h6>Laptops</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <Link to="/category/bicycle" style={{ textDecoration: 'none' }}>
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon icon={bicycle} size="large" color="warning" />
                        <IonText color="dark">
                            <h6>Bicycles</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol className="chip-col" size="6">
                <Link to="/category/mobile" style={{ textDecoration: 'none' }}>
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon
                            icon={phonePortraitOutline}
                            size="large"
                            color="danger"
                        />
                        <IonText color="dark">
                            <h6>Phones</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <Link
                    to="/category/matteress"
                    style={{ textDecoration: 'none' }}
                >
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon
                            icon={tabletLandscapeOutline}
                            size="large"
                            color="dark"
                        />
                        <IonText color="dark">
                            <h6>Matteresses</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol className="chip-col" size="6">
                <Link to="/category/book" style={{ textDecoration: 'none' }}>
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon
                            icon={bookOutline}
                            size="large"
                            color="success"
                        />
                        <IonText color="dark">
                            <h6>Books</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <Link to="/category/misc" style={{ textDecoration: 'none' }}>
                    <IonChip outline color="dark" className="category-chip">
                        <IonIcon
                            icon={constructOutline}
                            size="large"
                            color="primary"
                        />
                        <IonText color="dark">
                            <h6>Misc.</h6>
                        </IonText>
                    </IonChip>
                </Link>
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default CategoryCard;
