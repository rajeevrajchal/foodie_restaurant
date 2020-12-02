import React from 'react';
import Link from "next/link";

const Welcome = () => {
    return (
        <div className={'welcome'}>
            <section className="welcome-content flex justify-between align-center items-center">
                <div className="welcome-text-content">
                    <div className="title welcome-text-title">
                        Your Favourite Food Delivered Hot & Fresh
                    </div>
                    <div className="welcome-text-desc mt-md gray-scale">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium asperiores cum eos expedita
                        illum incidunt iusto maiores necessitatibus neque optio
                        quam, quod sint totam. Necessitatibus.
                    </div>
                    <Link href={'/menu'}>
                        <div className="btn primary text-center order-button mt-lg">
                            Order Now
                        </div>
                    </Link>
                </div>
                <div className="welcome-image-area">
                    <div className="welcome-image">
                        <img src="https://cdn.pixabay.com/photo/2020/09/21/14/07/meal-5590186_1280.jpg" alt="momo"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcome;