import React from 'react';

const Filter = () => {
    return (
        <div className="filter-bar mt-lg">
            <div className="flex justify-center column items-center align-center">
                <div className="sub-title bold text-center headline">
                    Choose Your Dishes
                </div>
                <div className="w-30">
                    <div className="input-group">
                        <div className="input-box">
                            <select name="" id="" >
                                <option value="all">All</option>
                                <option value="momo">Momo</option>
                                <option value="pizza">Pizza</option>
                                <option value="chicken">Chicken</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;