import React from 'react';
import Image from "next/image";

const MiddleContact = () => {
    return (
        <section className={'middle-contact flex justify-center align-center item-center'}>
            <div className="elevated middle-contact-item flex column flex-centered">
                <div className="wrapper-image">
                    <Image
                        src={"/images/clock.svg"}
                        alt="time"
                        width={30}
                        height={30}
                        loading={"lazy"}
                    />
                </div>
                <div className="middle-contact-text-area mt-md">
                    <div className="bold label text-center">
                        Today 10:00 am - 7:00 pm
                    </div>
                    <div className="sub-label capitalize gray-scale text-center mt-md">
                        working hours
                    </div>
                </div>
            </div>
            <div className="elevated middle-contact-item flex column flex-centered">
                <div className="wrapper-image">
                    <Image
                        src={"/images/placeholder.svg"}
                        alt="time"
                        width={30}
                        height={30}
                        loading={"lazy"}
                    />
                </div>
                <div className="middle-contact-text-area mt-md">
                    <div className="bold label text-center">
                        United States, Los Angelse
                    </div>
                    <div className="sub-label capitalize gray-scale text-center mt-md">
                        get direction
                    </div>
                </div>
            </div>
            <div className="elevated middle-contact-item flex column flex-centered">
                <div className="wrapper-image">
                    <Image
                        src={"/images/call.svg"}
                        alt="time"
                        width={30}
                        height={30}
                        loading={"lazy"}
                    />
                </div>
                <div className="middle-contact-text-area mt-md">
                    <div className="bold label">
                        9876543212
                    </div>
                    <div className="sub-label capitalize gray-scale mt-md">
                        call online
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiddleContact;