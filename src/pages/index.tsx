import React from "react";
import ViewPage from "../hoc/viewPage";
import Welcome from "./Home/components/welcome";
import AboutUs from "./Home/components/about_us";
import MiddleContact from "./Home/components/middle_contact";
import HowItWork from "./Home/components/how_it_work";
import Question from "./Home/components/question";
import MenuHome from "./Home/components/menu_home";

export default function Home() {
    return (
        <>
            <ViewPage
                title={'Restaurant '}
                description={'Restaurant is a place for having lunch with love family. '}>
                <Welcome/>
                <MiddleContact/>
                <AboutUs/>
                <HowItWork/>
                <MenuHome/>
                <Question/>
            </ViewPage>
        </>
    )
}
