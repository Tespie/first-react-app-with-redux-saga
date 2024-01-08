import { PRODUCT_LIST } from "./constant";


export const productData = (data = [], action) => {

    switch (action.type) {
        case PRODUCT_LIST:
            console.log('PRODUCT_LIST action', action);
            return [action.data];

        default:
            console.log("Oh No Product Action matched 😑")
            return data;
    }

}