import { createStore } from "redux";
import rootReducers from "./Reducers";

const data_store = createStore(rootReducers);

export default data_store;