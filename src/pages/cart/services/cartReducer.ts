import * as actionTypes from './cartType';

const initialState = {
    cart:{}
};

 const cartReducer = (state = initialState, actions: any) => {
    const { cart_data } = actions
    switch (actions.type) {
        case actionTypes.GET_CART:
            return {
                ...state,
                cart: cart_data
            }
        default:
            return state;
    }
};

export default cartReducer