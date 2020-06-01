import React from 'react';
import {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
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

const CategoryCard: React.FC = () => (
    <IonGrid>
        <IonRow>
            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon
                        icon={laptopOutline}
                        size="large"
                        color="secondary"
                    />
                    <IonText color="dark">
                        <h6>Laptops</h6>
                    </IonText>
                </IonChip>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon icon={bicycle} size="large" color="warning" />
                    <IonText color="dark">
                        <h6>Bicycles</h6>
                    </IonText>
                </IonChip>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon
                        icon={phonePortraitOutline}
                        size="large"
                        color="danger"
                    />
                    <IonText color="dark">
                        <h6>Phones</h6>
                    </IonText>
                </IonChip>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon
                        icon={tabletLandscapeOutline}
                        size="large"
                        color="dark"
                    />
                    <IonText color="dark">
                        <h6>Matteresses</h6>
                    </IonText>
                </IonChip>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon icon={bookOutline} size="large" color="success" />
                    <IonText color="dark">
                        <h6>Books</h6>
                    </IonText>
                </IonChip>
            </IonCol>

            <IonCol className="chip-col" size="6">
                <IonChip outline color="dark">
                    <IonIcon
                        icon={constructOutline}
                        size="large"
                        color="primary"
                    />
                    <IonText color="dark">
                        <h6>Misc.</h6>
                    </IonText>
                </IonChip>
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default CategoryCard;
