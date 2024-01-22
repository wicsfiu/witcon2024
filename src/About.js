import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import square1 from "./images/square1.png";
import square2 from "./images/square2.png";

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
                    <h2>Why WITCON?</h2>
                    <span className='line'></span>
                    <p>
                        Witcon will be held on March 9th, 2024, at FIU. Register now to stay up to date with event 
                        details such as panels, workshops, and having your resume seen by our sponsors!
                    </p>
                </motion.div>

                {/* Space for 6 images in 2 rows */}
                <div className='image-container'>
                    <div className='image-row'>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 1</p>
                            </div>
                            <img src={square1} alt='square 1' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 2</p>
                            </div>
                            <img src={square2} alt='square 2' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 3</p>
                            </div>
                            <img src={square1} alt='square 3' />
                        </motion.div>
                    </div>
                    <div className='image-row'>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 4</p>
                            </div>
                            <img src={square2} alt='square 4' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 5</p>
                            </div>
                            <img src={square1} alt='square 5' />
                        </motion.div>
                        <motion.div
                            className='square'
                            variants={imageVariants}
                            whileHover='hover'
                        >
                            <div className='overlay'>
                                <p>Title 6</p>
                            </div>
                            <img src={square2} alt='square 6' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;




