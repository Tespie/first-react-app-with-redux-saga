import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const addToCart = (data) => {
    console.warn('action addToCart called and data', data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn('action removeFromCart called and data', data)
    // data.length = data.length ? data.length - 1 : []
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.warn('action emptyCart called and data', data)
    return {
        type: EMPTY_CART,
        // data  // BEACUSE NO DATA NEEDED so dont return data
    }
}