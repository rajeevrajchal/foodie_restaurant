import React from 'react';
import {useSelector} from 'react-redux'

const UserInfo: React.FC = () => {
    const {loggedInUser} = useSelector((state) => state.authReducer)
    const makeOrder = () => {
        console.log(loggedInUser.uid)
    }
    return (
        <div className="user-info elevated">
            <div className="pa-md">
                <div className="headline sub-title">
                    {loggedInUser.displayName}
                </div>
                <div className=" sub-title mt-sm">
                    {loggedInUser.phoneNumber ? loggedInUser.phoneNumber : "+977 9860116323"}
                </div>
                <div className="sub-title mt-sm">
                    {loggedInUser.email}
                </div>
                <div className="sub-title mt-sm">
                    Chasukhel, Bhaktapur, Nepal
                </div>
            </div>
            <div className="flex justify-center">
                <div className="btn primary " onClick={() => makeOrder()}>
                    Make Order
                </div>
            </div>
        </div>
    );
};

export default UserInfo;