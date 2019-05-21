export default (state = {}, {type, payload}) => {
    let updatedState = null;
    let categoryCard = null;
    let updatedCards = null;

    switch (type) {
        case 'CATEGORY_CREATE':
            return {...state,[payload.id]: []};
        case 'CATEGORY-DESTROY':
            updatedState = {...state};
            delete updatedState[payload.id];
            return updatedState;
        case 'CARD_CREATE':
            //Jerome - payload is card
            categoryCard = state[payload.categoryId];
            updatedCards = [...categoryCard, payload];
            return {...state, [payload.categoryId]: updatedCards};

            case 'CARD_DESTROY':
                return state;
        case 'CARD_UPDATE':
            categoryCard = state[payload.categoryId];
            updatedCards = categoryCard.map(currentCard => {
                return currentCard.id === payload.id ? payload : currentCard;
            });
            return {...state, [payload.categoryId]: updatedCards};
        default:
            return state;
    }
};