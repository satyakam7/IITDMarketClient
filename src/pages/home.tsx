import React from 'react';
import { IonContent,IonLabel,IonSearchbar, IonHeader, IonPage, IonFab,IonFabButton,IonIcon, IonToolbar, IonFabList, IonGrid, IonRow, IonFooter } from '@ionic/react';
import { add, createOutline, laptopOutline, phonePortraitOutline, bicycleOutline, libraryOutline, tabletLandscapeOutline, appsOutline } from 'ionicons/icons';
import './home.css';
import SearchBar from '../components/SearchBar'
import ItemCard from '../components/ItemCard'
import CategoryCard from '../components/CategoryCard'

const home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent className="ion-no-border">
        <SearchBar />

      </IonHeader>

      <IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="start">
              <IonIcon class="ad" size="large" icon={createOutline}/>
              <IonLabel>Post an Ad</IonLabel>
          </IonFabList>
        </IonFab>
        
        <IonGrid>
            <IonRow>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </IonRow>
            <IonRow>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </IonRow>
          </IonGrid>
        <IonToolbar>
          <h4 className="sub-heading">Latest Deals</h4>
        </IonToolbar>
        <div className="items">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        
        
        </IonContent>
        
    </IonPage>
  );
};

export default home;
