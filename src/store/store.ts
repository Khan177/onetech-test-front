import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

import thunkMiddleware from "redux-thunk";

const enchancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, enchancer);
export default store;
