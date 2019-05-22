export default (state = {}, {type, payload}) => {
    let updatedState = null;
    let categoryCard = null;
    let updatedCards = null;

    switch (type) {
        case 'CATEGORY-CREATE':
            return {...state,[payload.id]: []};
        case 'CATEGORY-DESTROY':
            updatedState = {...state};
            delete updatedState[payload.id];
            return updatedState;
        case 'CARD-CREATE':
            //Jerome - payload is card
            categoryCard = state[payload.categoryId];
            updatedCards = [...categoryCard, payload];
            return {...state, [payload.categoryId]: updatedCards};

        case 'CARD-DESTROY':
                categoryCard = state[payload.categoryId];
                updatedCards = categoryCard.filter(currentCard => {
                    return currentCard.id !==payload.id
                });
                return {...state, [payload.categoryId]: updatedCards};

        case 'CARD-UPDATE':
            categoryCard = state[payload.categoryId];
            updatedCards = categoryCard.map(currentCard => {
                return currentCard.id === payload.id ? payload : currentCard;
            });
            return {...state, [payload.categoryId]: updatedCards};
        default:
            return state;
    }
};