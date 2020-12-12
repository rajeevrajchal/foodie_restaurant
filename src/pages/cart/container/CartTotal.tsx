import React from 'react';

const CartTotal = () => {
    return (
        <div className="elevated mb-xl">
            <div className="pa-md">
                <div className="sub-total flex justify-between">
                    <div className="sub-title">
                        Sub Total
                    </div>
                    <div className="sub-title">
                        Rs 60.00
                    </div>
                </div>
                <div className="sub-total flex justify-between mt-sm">
                    <div className="sub-title">
                        Discount
                    </div>
                    <div className="sub-title">
                        Rs 60.00
                    </div>
                </div>
                <div className="sub-total flex justify-between mt-sm">
                    <div className="sub-title">
                        Delivery Charges
                    </div>
                    <div className="sub-title">
                        Rs 60.00
                    </div>
                </div>
                <div className="mt-sm">
                    <hr/>
                </div>
                <div className="sub-total flex justify-between mt-sm">
                    <div className="sub-title bold">
                        Grand Total
                    </div>
                    <div className="sub-title bold">
                        Rs 180.00
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartTotal;