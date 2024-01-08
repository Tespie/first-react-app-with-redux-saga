import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    console.log('Saga getProducts API called')

    let data = yield fetch("http://localhost:3500/product")
    data = yield data.json()

    console.warn('action productList called and data', data)

    yield put({ type: SET_PRODUCT_LIST, data })

}

function* productSaga() {
    console.log('Saga productSaga called')
    yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
