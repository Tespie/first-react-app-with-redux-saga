import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"

// export const productList = async () => {
export const productList = () => {

    /**
     * REMOVED API CALL and async Word 
     * because 
     * redux don't allow async operations like API call
     * 
     * So..........
     * 
     * We have created productSaga to handle API calls.
     * 
     */
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // data = await data.json()
    // console.warn('action productList called and data', data)

    console.log('action productList called')
    return {
        type: PRODUCT_LIST,
        // data: "filhal to ye hi hain" // This is also dont needed because saga is returning data to reducer now
    }
}
