import React from 'react';
import './Hero.css';
import flyer from "./images/flyer.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    const textMotion = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: {
            duration: 2.0,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
        }
    };

    const imageMotion = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: {
            duration: 2.0,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
        }
    };

    return (
        <div className='hero' id='home'>
            <motion.div
                className='content'
                whileHover={{ scale: 1.1 }} // Adjust the scale factor as needed
            >
                <motion.div {...textMotion} className='text-container'>
                    <p>WELCOME TO</p>
                    <p>WITCON 2024</p>
                    <p>Woman in Technology Conference</p>
                    <button href='/' className='button'>Register Today!</button>
                    <button href='/' className='button schedule-button'>Event Schedule</button>
                </motion.div>
            </motion.div>
            <motion.div
                className='image'
                whileHover={{ scale: 1.1 }} // Adjust the scale factor as needed
            >
                <motion.img {...imageMotion} src={flyer} alt='Flyer' />
            </motion.div>
        </div>
    );
}

export default Hero;
