import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'

// @ts-ignore
import cartStyle from './cart.module.scss'

import Modal from "../../common/partials/modal";

import {getCartData} from "./services/cartAction";
import ViewPage from "../../hoc/viewPage";

const Cart = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartData())
    })
    return (
        <ViewPage
            title={'Foodie: Cart '}
            description={'this is ecommerce'}>
            <div className={'cart'}>
                <Modal/>
                <p className={cartStyle.example}> this is cart </p>
            </div>
        </ViewPage>
    );
};

export default Cart;