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
        window.location.href = 'https://drive.google.com/file/d/1H0Q1Etv0lPTQFz4cQ8bZJqF4nRW9_mDJ/view?usp=sharing';
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        window.location.href = 'https://lu.ma/witcon24fiu';
    };

    const handleAttendeeClick = (e) => {
        e.preventDefault();
        window.location.href = 'https://zigzag-provelone-bf1.notion.site/WiTCON-2024-Attendee-Guide-aaa6242fbef0476d82cc7d2ced284cf5?pvs=4';
    };

    const handleEventScheduleHover = () => {
        setEventScheduleButtonText('View Schedule');
    };

    const handleEventScheduleLeave = () => {
        setEventScheduleButtonText('Event Itinerary');
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
                        aria-label={eventScheduleButtonText}  // Add aria-label for accessibility
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
                    <button
                        type="button"
                        className='button'
                        onClick={handleAttendeeClick}
                    >
                        ATTENDEE GUIDE
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
