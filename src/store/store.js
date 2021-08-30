import { combineReducers, createStore } from "redux";
import { ubicacionReducer } from "../reducers/ubicacionReducer";

const reducers = combineReducers({
    clima: ubicacionReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())