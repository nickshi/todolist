import {
    ADD_ITEM,
    REMOVE_ITEM,
    TOGGLE_ITEM_COMPLETED,
    REMOVE_COMPLETED
} from './ActionTypes';

var curIdx = 0;

export function addItem(text) {
    return {
        itemID: ++curIdx,
        type: ADD_ITEM,
        payload: text,
    }
}

export function removeItem(itemID) {
    return {
        itemID: itemID,
        type: REMOVE_ITEM,
    }
}

export function toggleItemCompleted(itemID) {
    return {
        type: TOGGLE_ITEM_COMPLETED,
        itemID: itemID,
    }
}

export function removeCompleted() {
    return {
        type: REMOVE_COMPLETED,
    }
}