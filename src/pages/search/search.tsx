import React from 'react';
import { IonRow, IonCol, IonContent, IonPage } from '@ionic/react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import ItemCard from '../../components/ItemCard/ItemCard';

import { Item } from '../../utils/types';
import { getItem } from '../../store/actions/item';

type getItemType = (search: string, page: number, category: string) => void;

interface CategoryDetailProps {
    allItems: Item[];
    getItem: getItemType;
    currentPage: number;
}

interface MatchParams {
    categoryname: string;
    searchtext: string;
}
// filter - category prices range
const Search: React.FC<
    RouteComponentProps<MatchParams> & CategoryDetailProps
> = (props) => {
    const { allItems, match, getItem: getItemT, currentPage } = props;
    const { searchtext } = match.params;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentPageState, setPageState] = React.useState(currentPage);
    const itemList = allItems.map((item) => {
        return (
            // eslint-disable-next-line no-underscore-dangle
            <IonCol size="6" key={item._id}>
                <ItemCard item={item} />
            </IonCol>
        );
    });

    React.useEffect(() => {
        getItemT(searchtext, currentPageState, 'all');
    }, [currentPageState, getItemT, searchtext]);
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

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (s, page, cat) => {
            dispatch(getItem(s, page, cat));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
