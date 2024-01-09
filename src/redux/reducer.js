import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const cartData = (data = [], action) => {
    console.log('cardData action = ', action.type);
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];

        case REMOVE_FROM_CART:
            /**
             * Uncaught Error: A state mutation was detected inside a dispatch, in the path: cartData.1. Take a look at the reducer(s) handling the action {"type":"REMOVE_FROM_CART","data":"Dell Inspiron"}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)
             */
            // data.length = data.length ? data.length - 1 : [] // Commented Because this is causing error : 

            const remainingItem = data.filter((item) => item.id !== action.data)
            console.log('remainingItem = ', remainingItem.length)
            return [...remainingItem];

        case EMPTY_CART:
            data = []
            return [...data];

        default:
            console.log("Oh No CART Action matched 😑")
            return data;
    }

}