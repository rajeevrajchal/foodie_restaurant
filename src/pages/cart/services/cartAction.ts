import * as actionType from './cartType'
import {Dispatch} from "redux";

const fetchCart = (cart_data: any) => {
    return {
        type: actionType.GET_CART,
        cart_data
    };
};

export const getCartData = () => (dispatch: Dispatch) => {
    console.log('le cart ko data fetch gara ')
    const cart = {
        name: 'alu'
    }
    dispatch(fetchCart(cart))
}