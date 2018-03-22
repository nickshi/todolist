import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_ITEM_COMPLETED,
    REMOVE_COMPLETED
} from '../actions/ActionTypes';

const initialState = {
    items: [],
  }

export default function todos(state = initialState, action) {
    const {itemID, type, payload} = action;
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [{itemID: itemID, label: payload, completed: false}, ...state.items],
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.itemID !== itemID)
            }
        case TOGGLE_ITEM_COMPLETED:
            return {
                ...state,
                items : state.items.map((item) => {
                    if(item.itemID == itemID) {
                        return {...item, completed: !item.completed}
                    }
                    return {...item};
                })
            }
        case REMOVE_COMPLETED:
            return {
                ...state,
                items: state.items.filter((item) => !item.completed)
            }
        default:
            return initialState;
    }
}