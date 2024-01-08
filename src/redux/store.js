// import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// imported productSaga
import productSaga from "./productSaga";
import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// const store = createStore(rootReducer);  
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

// then run the productSaga
sagaMiddleware.run(productSaga);

export default store;
