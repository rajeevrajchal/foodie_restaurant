import React from "react";
import ViewPage from "../hoc/viewPage";
import Nav from "../common/partials/nav";
import Welcome from "../common/components/welcome";

export default function Home() {
    return (
        <>
            <ViewPage
                title={'Foodie '}
                description={'this is ecommerce'}>
                <Welcome/>
            </ViewPage>
        </>
    )
}
