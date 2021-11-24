import {combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    auth: authReducer
})

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, reduxDevTools)