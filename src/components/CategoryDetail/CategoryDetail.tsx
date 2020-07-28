import React from 'react';
import { IonRow, IonCol, IonContent, IonPage } from '@ionic/react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ItemCard from '../ItemCard/ItemCard';

import { Item } from '../../utils/types';

interface CategoryDetailProps {
    allItems: Item[];
}

interface MatchParams {
    categoryname: string;
}

const CategoryDetail: React.FC<
    RouteComponentProps<MatchParams> & CategoryDetailProps
> = (props) => {
    const { allItems, match } = props;
    const { categoryname } = match.params;
    const itemList = allItems.map((item) => {
        if (categoryname === item.category) {
            return (
                <IonCol size="6" key={item._id}>
                    <ItemCard item={item} />
                </IonCol>
            );
        }

        return null;
    });

    return (
        <IonPage>
            <IonContent>
                <IonRow>{itemList}</IonRow>
            </IonContent>
        </IonPage>
    );
};

const mapStateToProps = (state) => {
    const allItems = state.item.items;

    return {
        allItems,
    };
};

export default connect(mapStateToProps)(CategoryDetail);
