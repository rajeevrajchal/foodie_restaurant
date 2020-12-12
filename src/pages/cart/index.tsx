import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Modal from "../../common/partials/modal";

import {getCartData} from "./services/cartAction";
import ViewPage from "../../hoc/viewPage";
import UserInfo from "../../common/components/auth/components/UserInfo"
import SignIn from "../../common/components/auth/components/SignIn"
import CartItem from "./container/CartItem"
import CartTotal from "./container/CartTotal"

const Cart = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector((state) => state.authReducer)
    useEffect(() => {
        dispatch(getCartData())
    })
    return (
        <ViewPage
            title={'Foodie: Cart '}
            description={'this is restaurant'}>
            <main className='cart'>
                <section className="flex align-center mt-xl">
                    <div className="cart-details elevated">
                        <div className="pa-md">
                            <div className="cart-title flex justify-between align-center item-center">
                                <div className="title">Your Cart</div>
                                <div className="title">Items: 7</div>
                            </div>
                            <div className="cart-data pt-md pb-md">
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                            </div>
                        </div>
                    </div>
                    <div className="user-small-info">
                        <CartTotal/>
                        {
                            isLoggedIn ? <UserInfo/> :<SignIn/>
                        }
                    </div>
                </section>
            </main>
        </ViewPage>
    );
};

export default Cart;