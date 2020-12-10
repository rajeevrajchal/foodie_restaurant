import React from 'react';

import Image from 'next/image'
import Link from 'next/link'


const AboutUs = () => {
    return (
        <>
            <section className={'about_us-us welcome-content flex justify-between align-center items-center'}>
                <div className="welcome-image-area">
                    <div className="welcome-image">
                        <Image
                            src={"/images/broccoli.svg"}
                            alt="Broccoli"
                            layout="responsive"
                            width={400}
                            height={400}
                            loading={"lazy"}
                        />
                    </div>
                </div>
                <div className="welcome-text-content">
                    <div className="sub-title headline">
                        About
                    </div>
                    <div className="title welcome-text-title">
                        Your Favourite Food Delivered Hot & Fresh
                    </div>
                    <div className="welcome-text-desc mt-md gray-scale">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium asperiores cum eos expedita
                        illum incidunt iusto maiores necessitatibus neque optio
                        quam, quod sint totam. Necessitatibus.
                    </div>
                    <Link href={"/about_us"}>
                        <div className="btn primary text-center order-button mt-lg">
                            Know More
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AboutUs;