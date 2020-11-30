import React from 'react';
import Header from '../common/partials/Header'
import Footer from "../common/partials/Footer";
import Nav from "../common/partials/nav";

interface ViewPageProps {
    title: string
    description:string
    children:React.ReactNode
}
const ViewPage: React.FC<ViewPageProps> = (props) => {
    const {
        title,
        description,
        children
    } = props
    return (
        <>
            <Header
                title={title}
                description={description}
            />
            <Nav/>
            {
                children
            }
            <Footer/>
        </>
    );
};

export default ViewPage