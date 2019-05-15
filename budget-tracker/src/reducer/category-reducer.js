export default (state = [], {type, payload}) => {
    // Jerome - remember to understand your payload
    // Jerome - in this case, the payload is a category
    switch (type) {
        case 'CATEGORY-CREATE':
            return [...state, payload];
        case 'CATEGORY-UPDATE':
            return null;

        case 'CATEGORY-DESTROY':
            return null;

        default:
            return state;
    }
};