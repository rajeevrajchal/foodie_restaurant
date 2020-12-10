import React, {useState} from 'react';
import ViewPage from "../../hoc/viewPage";
import Filter from "../menu/components/filter";
import MenuCard from "../../common/components/menu_card";
import DataLoading from "../../common/partials/dataLoading";

const Offer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <ViewPage
            description={'Restaurant Offer Page '}
            title={'We offer all  Nepali  / Newari cusine '}>
            <main className={'menu'}>
                <div className="menu-header headline title text-center mt-lg">
                    Our Special Offers
                </div>
                <section>
                    <div className="menu-items flex wrap mt-xl">

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

export default Offer;