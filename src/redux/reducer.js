import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const cartData = (data = [], action) => {
    console.warn('reducer cartData got action =', action)

    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];

        case REMOVE_FROM_CART:
            data.length = data.length ? data.length - 1 : []
            return [...data];

        case EMPTY_CART:
            data = []
            return [...data];

        default:
            console.log("Oh No 😑 Action matched")
            return data;
    }

}