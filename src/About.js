import React from 'react';
import './About.css';
import guide1 from "./images/guide1.jpg";
import guide2 from "./images/guide2.jpg";

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                {/* First Line */}
                <div className='col-1'>
                    <h2>Why WITCON?</h2>
                    <span className='line'></span>
                    <p>
                    Witcon will be held on March 9th 2024 at FIU. Register now to stay up to date with event 
                    details such as panels, workshops, and having your resume seen by our sponsors!
                    </p>
                </div>

                {/* Second Line */}
                <div className='col-3'>
                    <div className='column'>
                        <img src={guide1} alt='Guide' />
                    </div>
                    <div className='column'>
                        <img src={guide2} alt='Guide' />
                    </div>
                    <div className='column'>
                        <img src={guide1} alt='Guide' />
                    </div>
                </div>

                {/* Third Line */}
                <div className='col-2'>
                    <div className='column'>
                        <img src={guide1} alt='Guide' />
                    </div>
                    <div className='column'>
                        <img src={guide2} alt='Guide' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;