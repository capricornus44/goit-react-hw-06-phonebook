import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers/root-reducer"

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV !== "production",
})

export default store

// ============= Version without redux-toolkit =============

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./reducers";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
