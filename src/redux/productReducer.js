import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {

    switch (action.type) {

        /**
         * This action PRODUCT_LIST is also REMOVED,
         * Because , We are directly calling PRODUCT_LIST from productSaga using this action
         * 
         */
        // case PRODUCT_LIST:
        //     console.log('PRODUCT_LIST action', action);
        //     return [action.data];

        /**
         * Here also we are getting data directly from productSaga
         * NOT via productAction
         */
        case SET_PRODUCT_LIST:
            console.log('SET_PRODUCT_LIST action', action);
            return [...action.data];

        default:
            console.log("Oh No Product Action matched 😑")
            return data;
    }

}