import React from 'react';
import ViewPage from "../../hoc/viewPage";

const About = () => {
    return (
        <ViewPage description={'contact'}
                  title={'We are always ready for your message '}
        >
            <main className={'contact'}>
                <section className="contact-content flex align-center items-center">
                    <div className="contact-description">
                        <div className="title headline">Restaurant</div>
                        <div className="description mt-md">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at ea incidunt nesciunt porro quas ratione voluptates! Architecto delectus, earum eos, fugit hic iste minima natus nemo non officia sit soluta velit. Asperiores atque aut autem debitis dolorum et hic, ipsa ipsam repellendus rerum, sint temporibus ullam veniam veritatis voluptatem!
                        </div>
                        <div className="social-media-icons flex mt-lg">
                            <div className="icons">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div className="icons">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.406397023034!2d85.42971891467617!3d27.6738316335718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdd1f534523%3A0xa2a10e5310960a8f!2sKiba%20newa%20restaurant!5e0!3m2!1sen!2snp!4v1607571741368!5m2!1sen!2snp"
                            width="600" height="450" frameBorder="0"
                            aria-hidden="false"></iframe>
                    </div>
                </section>

            </main>
        </ViewPage>
    );
};

export default About;