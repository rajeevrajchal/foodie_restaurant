import { combineReducers } from "redux";
import cartReducer from "../pages/cart/services/cartReducer";
import authReducer from "../common/components/auth/services/authReducer";

const reducer = combineReducers({
    cartReducer,
    authReducer
});
export default reducer;