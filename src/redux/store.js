// import { createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(rootReducer);  
const store = configureStore({ reducer: rootReducer });

export default store;
