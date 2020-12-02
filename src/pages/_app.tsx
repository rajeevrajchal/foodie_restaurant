import React from "react";
import '../styles/main.scss'
import withReduxStore from "../../lib/with-redux-store";
import {Provider} from "react-redux";

type MyAppProps = {
    reduxStore: any;
    Component:any;
    pageProps:any
};

const MyApp:React.FC<MyAppProps> = (props) => {
    const {Component, pageProps, reduxStore} = props
    return (
        <>
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default withReduxStore(MyApp)
