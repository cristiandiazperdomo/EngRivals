import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools || compose;

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
