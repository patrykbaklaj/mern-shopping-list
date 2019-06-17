import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
    // return async (dispatch) => {
    //     const response = await()
    // }
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

export const addItem = newItem => {
    return {
        type: ADD_ITEM,
        payload: newItem
    };
};
