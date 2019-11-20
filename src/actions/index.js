export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

export const removeFeature = remove => {
    return {
        type: REMOVE_FEATURE,
        payload: remove
    }
}

