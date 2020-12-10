import React from 'react';
import ViewPage from "../../hoc/viewPage";

const About = () => {
    return (
        <ViewPage description={'contact'}
                  title={'We are always ready for your message '}
        >
            <main className={'contact'}>
                <p> this is contact us  </p>
            </main>
        </ViewPage>
    );
};

export default About;