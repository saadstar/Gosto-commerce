export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
};
export const REMOVE = (id) => {
    return {
        type: "REMOVE",
        payload: id,
    }
};
export const REMOVE_ITEM = (item) => {
    return {
        type: "REMOVE_ITEM",
        payload:item
    }
}