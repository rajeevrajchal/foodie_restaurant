import React from 'react';
import Image from "next/image";

const HowItWork = () => {
    return (
        <section className={'how-it-work'}>
            <div className="hiw-content">
                <div className="sub-title headline bold capitalize text-center">
                    How it works
                </div>
                <div className="sub-title text-center capitalize mt-md">
                    a tasty smell make the food tasty.
                    <br/>
                    Hunger make an order.
                </div>

                <div className="hiw-items flex justify-center mt-xl">
                    <div className="hiw-item card elevated">
                        <div className="image-container">
                            <Image
                                src="/images/chicken-leg.svg"
                                alt="chicken"
                                width={100}
                                height={200}
                                loading={"lazy"}
                            />
                        </div>
                        <div className="sub-title bold text-center capitalize">
                            choose Meals
                        </div>
                        <div className="description pa-md">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Illum minima, nesciunt
                            officia quaerat quisquam veritatis.
                        </div>
                    </div>
                    <div className="hiw-item card elevated">
                        <div className="image-container">
                            <Image
                                src="/images/tap.svg"
                                alt="select"
                                width={100}
                                height={200}
                                loading={"lazy"}
                            />
                        </div>
                        <div className="sub-title bold text-center capitalize">
                            Pick Meals
                        </div>
                        <div className="description pa-md">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Illum minima, nesciunt
                            officia quaerat quisquam veritatis.
                        </div>
                    </div>
                    <div className="hiw-item card elevated">
                        <div className="image-container">
                            <Image
                                src={'/images/delivery.svg'}
                                alt="time"
                                width={100}
                                height={200}
                                loading={"lazy"}
                            />
                        </div>
                        <div className="sub-title bold text-center capitalize">
                            Fast Deliveries
                        </div>
                        <div className="description pa-md">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Illum minima, nesciunt
                            officia quaerat quisquam veritatis.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;