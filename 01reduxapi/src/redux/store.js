// Importing createStore function from Redux
import { createStore } from "redux";

// Importing the combined reducer from "./reducers/index"
import reducer from "./reducers/index";

// Creating the Redux store by passing the combined reducer and an optional initial state ({})
const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Exporting the created store as the default export of this module
export default store;
