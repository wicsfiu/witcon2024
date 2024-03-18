// Sponsors.js
import React, { useEffect } from 'react';
import './Sponsors.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import spons from "./images/spons.png"; 
import kf from "./images/kf.png"; 
import spons2 from "./images/spons2.png";

const Sponsors = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const imageVariants = {
        hidden: { opacity: 0, y: isMobile ? 0 : 30 },
        visible: { opacity: 1, y: 0, scale: isMobile ? 1 : 1.05 }
    };

    const handleScroll = () => {
        // Add any logic if needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sponsors`} id='sponsors'>
            <div className='container'>
                {/* Motion Div */}
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={imageVariants}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ scale: isMobile ? 1 : 1.05 }}
                    className='col-1'
                >
                    <h2>Powered By</h2>
                    <div className='spons-image'>
                        <img src={kf} alt='kf'/>
                    </div>
                    <h2>SPONSORS</h2>
                    <p>Interest in sponsoring WiTCON24? Email us at wics@fiu.edu</p>
{/* Add the large image here */}
<div className='spons-image'>
                        <img src={spons} alt='spons'/>
                        <img src={spons2} alt='spons2'/>

                        
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sponsors;

