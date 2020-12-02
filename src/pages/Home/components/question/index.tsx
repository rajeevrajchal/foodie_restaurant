import React from 'react';

const Question = () => {
    return (
        <section className='question'>
            <div className="sub-title headline bold capitalize text-center">
                Question
            </div>
            <div className="title text-center capitalize mt-md">
                Have a question in mind ?
            </div>
            <div className="sub-title bold text-center capitalize mt-md">
               Let's us know
            </div>

            <div className="flex flex-centered">
                <form className='w-50'>
                    <div className="input-group">
                        <div className="input-box flex pa-sm">
                            <input type="text" placeholder='your@gmail.com'/>
                            <div className="ml-xl">
                                <div className="btn primary text-center capitalize sub-title">
                                    Send
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Question;