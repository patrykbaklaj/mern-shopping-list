import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
    items: [
        { id: uuid(), name: "eggs" },
        { id: uuid(), name: "milk" },
        { id: uuid(), name: "chips" },
        { id: uuid(), name: "beer" },
        { id: uuid(), name: "cookies" }
    ]
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            console.log("GET ITEMS action initializing!");
            return { ...state };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM: {
            return { ...state, items: [action.payload, ...state.items] };
        }
        default:
            return state;
    }
};

export default itemReducer;
