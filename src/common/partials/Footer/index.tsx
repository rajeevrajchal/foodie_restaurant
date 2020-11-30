import React from 'react';
import navItem from "../../../mock/navItems";

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between item-center align-center">
                <div className="footer-logo-area">
                    <div className="logo-text bold "> Foodie </div>
                </div>
                <div className="quick-menu">
                    {
                        navItem.map((item, index) => (
                            <div className={'quick-menu logo-text bold capitalize'} key={index}>
                                {item.label}
                            </div>
                        ))
                    }
                </div>
                <div className="contact-us">
                    <div className="contact sub-title">9287687356</div>
                    <div className="email sub-title">info@foodie.com</div>
                    <div className="address sub-title">lorem lorem lorem lorem </div>
                </div>
            </div>
            <div className="main-footer capitalize text-center mt-md">
                foodie © 2020
            </div>
        </footer>
    );
};

export default Footer;