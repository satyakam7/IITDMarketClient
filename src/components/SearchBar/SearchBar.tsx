import React, { useState } from 'react';
import { IonToolbar, IonSearchbar } from '@ionic/react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonToolbar>
            <IonSearchbar
                mode="ios"
                className="searchbar"
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                placeholder="Search"
            />
        </IonToolbar>
    );
};

export default SearchBar;
