import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    console.log('Saga getProducts API called')

    let data = yield fetch("http://localhost:3500/product")
    data = yield data.json()

    console.warn('action productList called and data', data)

    yield put({ type: SET_PRODUCT_LIST, data })

}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.warn(" searchProducts action is called", result)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}

function* productSaga() {
    console.log('Saga productSaga called')
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga;
