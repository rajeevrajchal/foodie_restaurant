import React from 'react';
import ViewPage from "../../hoc/viewPage";
const About = () => {
    return (
        <ViewPage description={'About'}
                  title={'We are the typically Nepali restaurant '}
        >
            <main className={'about-page'}>
                <section className="about-content">
                    <div className="about-header flex justify-center align-center items-center wrap">
                        <div className="company-desc">
                            <div className="title">
                                Restaurant
                            </div>
                            <div className="sub-title mt-lg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque autem beatae consectetur doloribus ea esse, inventore modi necessitatibus officia praesentium quaerat quos saepe similique soluta suscipit! Illo iusto, officiis? Ab aut eaque expedita, fugiat harum maiores possimus rerum sunt vel! At, deserunt eveniet ipsam libero pariatur porro sapiente?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque autem beatae consectetur doloribus ea esse, inventore modi necessitatibus officia praesentium quaerat quos saepe similique soluta suscipit! Illo iusto, officiis? Ab aut eaque expedita, fugiat harum maiores possimus rerum sunt vel! At, deserunt eveniet ipsam libero pariatur porro sapiente?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque autem beatae consectetur doloribus ea esse, inventore modi necessitatibus officia praesentium quaerat quos saepe similique soluta suscipit! Illo iusto, officiis? Ab aut eaque expedita, fugiat harum maiores possimus rerum sunt vel! At, deserunt eveniet ipsam libero pariatur porro sapiente?
                            </div>
                        </div>
                        <div className="company-image">
                            <img src="https://cdn.pixabay.com/photo/2017/05/10/21/25/vacation-2302009__480.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="company-workers mt-xl">
                        <div className="headline text-center"> Memebers </div>
                        <div className="flex wrap mt-lg justify-center">
                            <div className="worker">
                                <div className="menu-card">
                                    <div className="menu-item-image">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__480.jpg"
                                            alt="noodles"
                                        />
                                    </div>
                                    <div className="pa-md">
                                        <div className="headline gary-scale mt-sm">
                                            Served with french fries
                                        </div>
                                        <div className="description mt-md">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus illo iure
                                            omnis veritatis vero. Blanditiis delectus fugiat illo, laborum modi nisi quibusdam
                                            sapiente tenetur?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="worker">
                                <div className="menu-card">
                                    <div className="menu-item-image">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__480.jpg"
                                            alt="noodles"
                                        />
                                    </div>
                                    <div className="pa-md">
                                        <div className="headline gary-scale mt-sm">
                                            Served with french fries
                                        </div>
                                        <div className="description mt-md">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus illo iure
                                            omnis veritatis vero. Blanditiis delectus fugiat illo, laborum modi nisi quibusdam
                                            sapiente tenetur?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="worker">
                                <div className="menu-card">
                                    <div className="menu-item-image">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__480.jpg"
                                            alt="noodles"
                                        />
                                    </div>
                                    <div className="pa-md">
                                        <div className="headline gary-scale mt-sm">
                                            Served with french fries
                                        </div>
                                        <div className="description mt-md">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus illo iure
                                            omnis veritatis vero. Blanditiis delectus fugiat illo, laborum modi nisi quibusdam
                                            sapiente tenetur?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </ViewPage>
    );
};

export default About;