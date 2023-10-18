import bookStoreReducer from "./BookStore/bookStoreReducer";

const { createStore } = require("redux");

const store = createStore(bookStoreReducer,);
export default store;