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
                onIonChange={(e) => {
                    const data = e.detail.value;
                    if (data !== null && data !== undefined) {
                        setSearchText(data);
                    }
                }}
                placeholder="Search"
            />
        </IonToolbar>
    );
};

export default SearchBar;
