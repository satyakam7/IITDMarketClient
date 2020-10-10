/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { IonRow, IonCol, IonContent, IonPage } from '@ionic/react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ItemCard from '../../components/ItemCard/ItemCard';

import { Item } from '../../utils/types';
import { getHostelItem } from '../../store/actions/item';

type getHostelItemType = (hostel: string) => void;

interface CategoryDetailProps {
    allItems: Item[];
    getHostelItem: getHostelItemType;
    currentPage: number;
}

interface MatchParams {
    categoryname: string;
    searchtext: string;
}
// filter - category prices range
const Hostel: React.FC<
    RouteComponentProps<MatchParams> & CategoryDetailProps
> = (props) => {
    const {
        allItems,
        match,
        getHostelItem: getHostelItemT,
        currentPage,
    } = props;
    const { searchtext } = match.params;
    const [currentPageState, setPageState] = React.useState(currentPage);
    const itemList = allItems.map((item) => {
        return (
            <IonCol size="6" key={item._id}>
                <ItemCard item={item} />
            </IonCol>
        );
    });

    React.useEffect(() => {
        getHostelItemT('all');
    }, [currentPageState, getHostelItemT, searchtext]);
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
    const { currentPage } = state.item;

    return {
        allItems,
        currentPage,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getHostelItem: (hostel) => {
            dispatch(getHostelItem(hostel));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hostel);
