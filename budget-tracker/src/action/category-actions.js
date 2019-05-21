export const createCategory = (name,price) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CATEGORY-CREATE',
        payload: {
            id: Math.random(),
            name,
            price,
                createdOn: new Date(),
        }
    }
};

export const UpdateCategory = (category) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CATEGORY_UPDATE',
        payload: category,

    };
};

export const destroyCategory = (category) => {
    // Jerome- returning an object that represents the action
    return {
        type: 'CATEGORY_DESTROY',
        payload: category
    }
};

