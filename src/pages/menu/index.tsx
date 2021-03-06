import React, {ChangeEvent, useState} from 'react';
import ViewPage from "../../hoc/viewPage";
import MenuCard from "../../common/components/menu_card";
import DataLoading from "../../common/partials/dataLoading";
import Filter from "./components/filter";

const Menu = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <ViewPage title={'Foodie: Menu'} description={'this is foodie special menus '}>
            <main className={'menu'}>
                <div className="menu-header">
                    <Filter/>
                </div>
                <section>
                    <div className="menu-items flex wrap mt-lg">

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
                    {
                        isLoading && <DataLoading/>
                    }
                    <div className="flex justify-center mt-lg">
                        <div className="btn primary text-center" onClick={() => {
                            setIsLoading(true)
                        }}>
                            Load More
                        </div>
                    </div>
                </section>
            </main>
        </ViewPage>
    );
};

export default Menu;