import React from 'react';
import ViewPage from "../../hoc/viewPage";

const Menu = () => {
    return (
        <ViewPage title={'Foodie: Menu'} description={'this is foodie special menus '}>
            <main className={'menu-items'}>
                <div className="title text-center"> Our Menus </div>
            </main>
        </ViewPage>
    );
};

export default Menu;