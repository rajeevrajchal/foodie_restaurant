import React from 'react';

const CartItem = () => {
    return (
        <div className="cart-item flex justify-between align-center item-center mt-lg">
            <div className="card-options flex">
                <div className="item-image">
                    <img
                        src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__480.jpg"
                        alt="noodles"
                    />
                </div>
                <div className="flex justify-end column ml-lg mb-sm">
                    <div className="item-name">
                        <div className="sub-title bold headline"> Mushroom Soup </div>
                        <div className="headline flex">
                            <div className="sub-title">
                                Qty
                            </div>
                            <div className="sub-title ml-md">
                                1
                            </div>
                        </div>
                        <div className="flex">
                            <div className="sub-title">
                                Cost
                            </div>
                            <div className="sub-title ml-md">
                                Rs 60 * 1 = Rs 60
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-button pointer mt-xl pr-md">
                <i className="material-icons ">delete</i>
            </div>
        </div>
    );
};

export default CartItem;