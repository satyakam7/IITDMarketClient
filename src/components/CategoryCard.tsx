import React from 'react';
import { IonGrid, IonRow, IonCol,IonIcon, IonContent, IonLabel } from '@ionic/react';
import { laptopOutline, bicycleOutline, phonePortraitOutline, tabletLandscapeOutline, libraryOutline, constructOutline } from 'ionicons/icons';
import './CategoryCard.css'

const CategoryCard: React.FC = () => (
  
    <IonGrid>
      <IonRow>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="primary" size="large" icon={laptopOutline} /><br/>
          <IonLabel>Laptops</IonLabel>
        </IonCol>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="danger" size="large" icon={bicycleOutline} /><br/>
          <IonLabel>Bicycles</IonLabel>
        </IonCol>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="warning" size="large" icon={phonePortraitOutline} /><br/>
          <IonLabel>Mobiles</IonLabel>
        </IonCol>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="success" size="large" icon={tabletLandscapeOutline} /><br/>
          <IonLabel>Mattresses</IonLabel>
        </IonCol>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="secondary" size="large" icon={libraryOutline} /><br/>
          <IonLabel>Books</IonLabel>
        </IonCol>
        <IonCol className="col" size="3">
          <IonIcon id="1" color="dark" size="large" icon={constructOutline} /><br/>
          <IonLabel>Miscellaneous</IonLabel>
        </IonCol>
      </IonRow>
    </IonGrid>
  
);

export default CategoryCard;