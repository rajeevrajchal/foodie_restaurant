import React from 'react';
import navItem from "../../../mock/navItems";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between item-center align-center">
                <div className="footer-logo-area pointer">
                    <div className="logo-text bold "> Restaurant </div>
                    <div className="application-icons flex items-center align-center mt-lg">
                        <div className="icon">
                            <Image
                                src="/images/playstore.svg"
                                alt="select"
                                width={30}
                                height={30}
                                loading={"lazy"}
                            />
                        </div>
                        <div className="icon ml-lg">
                            <Image
                                src="/images/app-store.svg"
                                alt="select"
                                width={30}
                                height={30}
                                loading={"lazy"}
                            />
                        </div>
                    </div>
                </div>
                <div className="quick-menu">
                    {
                        navItem.map((item, index) => (
                            <div className={'quick-menu logo-text bold capitalize pointer'} key={index}>
                                {item.label}
                            </div>
                        ))
                    }
                </div>
                <div className="contact-us">
                    <div className="contact sub-title flex align-center items-center">
                        <div className="icon">
                            <i className="material-icons">
                                phone
                            </i>
                        </div>
                        <div className="label ml-md">
                            9287687356
                        </div>
                    </div>
                    <div className="email sub-title flex align-center items-center">
                        <div className="icon">
                            <i className="material-icons">
                                mail
                            </i>
                        </div>
                        <div className="label ml-md">
                            info@foodie.com
                        </div>
                    </div>
                    <div className="address sub-title flex align-center items-center">
                        <div className="icon">
                            <i className="material-icons">
                                location_on
                            </i>
                        </div>
                        <div className="label ml-md">
                            Chasukhel, Bhaktapur, Nepal
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer capitalize text-center mt-xl">
                restaurant © 2020
            </div>
        </footer>
    );
};

export default Footer;