import { AuthState } from '../authInterface';
import * as actionTypes from './authTypes';


const initialState:AuthState = {
    isLoggedIn:false,
    loggedInUser:{}
};

const authReducer = (state = initialState, actions: any) => {
    const { user_detail } = actions
    switch (actions.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loggedInUser: user_detail
            }
        default:
            return state;
    }
};

export default authReducer