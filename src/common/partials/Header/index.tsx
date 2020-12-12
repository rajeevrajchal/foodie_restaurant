import React from 'react';
import Head from 'next/head'

interface HeaderProps {
    title:string
    description:string
}
const Header:React.FC<HeaderProps> = (props) => {
    const {
        title,
        description
    } = props
    return (
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"/>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Head>
    );
};

export default Header;