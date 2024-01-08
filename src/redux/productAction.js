import { PRODUCT_LIST } from "./constant"

export const productList = async () => {

    let data = (await fetch("https://jsonplaceholder.typicode.com/todos/1"))
        .json()
    console.warn('action productList called and data', data)
    return {
        type: PRODUCT_LIST,
        data
    }
}