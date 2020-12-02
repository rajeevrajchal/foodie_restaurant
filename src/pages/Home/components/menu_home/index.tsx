import React from 'react';
import Image from "next/image";
import MenuCard from "../../../../common/components/menu_card";

const MenuHome = () => {
    return (
        <section className='menu'>
            <div className="sub-title headline bold capitalize text-center">
                menu
            </div>
            <div className="menu-content">
                <div className="title text-center  mt-md">Explore Our Best Dishes</div>
                <div className="flex justify-center mt-md">
                    <div className="sub-title text-center w-30">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet aperiam necessitatibus quisquam voluptatibus
                    </div>
                </div>
                <div className="menu-items flex wrap justify-center mt-lg">
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                    <div className="menu-item">
                        <MenuCard/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-lg">
                <div className="btn primary text-center">
                    Load More
                </div>
            </div>
        </section>
    );
};

export default MenuHome;