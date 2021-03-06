import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import reducer from "./reducers";

const middleware = [thunk];
const store = (initialState = {}) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}
export default store;