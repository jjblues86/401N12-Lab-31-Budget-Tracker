export const createCategory = (name, content) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CARD-CREATE',
        payload: {
            id: Math.random(),
            name,
            content,
            createdOn: new Date(),
        }
    }
};

export const UpdateCategory = (card) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CARD_UPDATE',
        payload: card,

    };
};

export const destroyCategory = (card) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CARD_DESTROY',
        payload: card,
    }
};

