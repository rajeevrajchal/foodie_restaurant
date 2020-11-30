import { combineReducers } from "redux";
import cartReducer from "../pages/cart/services/cartReducer";
const reducer = combineReducers({
    cartReducer
});
export default reducer;