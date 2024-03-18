import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import square1 from "./images/2.png";
import square2 from "./images/3.png";
import square3 from "./images/4.png";
import square4 from "./images/5.png";
import square5 from "./images/6.png";
import square6 from "./images/7.png";
import article from "./images/article.jpeg";
import article2 from "./images/article2.png";

const About = () => {
    const imageVariants = {
        hover: { scale: 1.2 },
    };

    return (
        <div className='about' id='about'>
            <div className='container'>
                {/* Motion Div */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className='col-1'
                >
    
                    <h2>What is WiTCON?</h2>
                    <span className='line'></span>
                   
                    <p>WiTCON 2024 is the signature Women in Technology Conference at Florida International University. Join us for a full-day of learning, networking, and empowerment of underrepresented talent in tech. The event is scheduled for March 9th, 2024, and will be held at the Graham Center Ballrooms at FIU Modesto Maidique Campus from 9AM - 7PM.</p>
                    <div>
                    </div>
                    <div onClick={() => window.location.href="https://panthernow.com/2023/04/05/witcon-paves-the-way-for-women-in-technology/"}>
                        <img src={article} alt='Logo' className='logo-above-button' />
                    </div>
    
                    <div onClick={() => window.location.href="https://www.cis.fiu.edu/the-women-in-tech-conference-witcon-at-florida-international-university-generates-overwhelming-enthusiasm-in-the-fiu-community/"}>
                        <img src={article2} alt='Logo' className='logo-above-button2' />
                    </div>
                     </motion.div>

                {/* Space for 6 images in 3 rows on larger screens and 2 rows on smaller screens */}
                <div className='image-container'>
                    <div className='image-row'>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Engaging Activities</p>
                            </div>
                            <img src={square1} alt='square 1' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Signature Industry Panel</p>
                            </div>
                            <img src={square2} alt='square 2' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Industry Workshops</p>
                            </div>
                            <img src={square3} alt='square 3' />
                        </motion.div>
                    </div>
                    <div className='image-row'>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Industry Fair</p>
                            </div>
                            <img src={square4} alt='square 4' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Fun!</p>
                            </div>
                            <img src={square5} alt='square 5' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Networking Hours</p>
                            </div>
                            <img src={square6} alt='square 6' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

