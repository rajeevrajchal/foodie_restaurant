import React from 'react';

const MenuCard = () => {
    return (
        <div className="menu-card">
            <div className="menu-item-image">
                <img
                    src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286__480.jpg"
                    alt="noodles"
                />
            </div>
            <div className="pa-md">
                <div className="menu-item-head flex justify-between align-center items-center">
                    <div className="mi-name title">
                        Rose Muffen
                    </div>
                    <div className="mi-cost title">
                        12 <span>$</span>
                    </div>
                </div>
                <div className="description gary-scale mt-sm">
                    Served with french fries
                </div>
                <div className="description mt-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus illo iure
                    omnis veritatis vero. Blanditiis delectus fugiat illo, laborum modi nisi quibusdam
                    sapiente tenetur?
                </div>
            </div>
            <div className="button-area flex justify-end">
                <div className="menu-card-button text-center">
                    <i className="material-icons bold">
                        add
                    </i>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;