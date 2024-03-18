import React, { useState } from 'react';
import './Hero.css';
import flyer from "./images/flyer.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const isMobile = useMediaQuery({ minWidth: 767 });
    const [eventScheduleButtonText, setEventScheduleButtonText] = useState('Event Schedule');

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

    const handleEventScheduleClick = (e) => {
        e.preventDefault();
        // Change 'https://wicsfiu.github.io/witcon2024/' to the actual URL of your site
        window.location.href = '#Itinerary';
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        window.location.href = 'https://lu.ma/witcon24fiu';
    };

    const handleEventScheduleHover = () => {
        setEventScheduleButtonText('Event Schedule');
    };

    const handleEventScheduleLeave = () => {
        setEventScheduleButtonText('Event Schedule');
    };

    return (
        <div className={`hero ${isMobile ? 'mobile' : ''}`} id='home'>
            <motion.div
                className='content'
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
            >
                <motion.div {...textMotion} className='text-container'>
                    <h2>WELCOME TO</h2>
                    <p>WITCON 2024</p>
                    <h2>Women in Technology Conference</h2>
                    <button
                        type="button"
                        className='button'
                        onClick={handleEventScheduleClick}
                        onMouseEnter={handleEventScheduleHover}
                        onMouseLeave={handleEventScheduleLeave}
                    >
                        {eventScheduleButtonText}
                    </button>

                    <button
                        type="button"
                        className='button'
                        onClick={handleRegisterClick}
                    >
                        Register Today!
                    </button>
                    <h3>
                        March 9th, 2024 <br />
                        9am to 7pm<br />
                        Graham Center @ FIU<br />
                    </h3>
                </motion.div>
            </motion.div>
            <motion.div
                className='image'
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
            >
                <motion.img {...imageMotion} src={flyer} alt='flyer' />
            </motion.div>
        </div>
    );
}

export default Hero;
