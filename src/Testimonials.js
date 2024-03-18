import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import './Testimonials.css';
import witty1 from './images/witty1.png';
import witty2 from './images/witty2.png';
import witty3 from './images/witty3.png';

const Testimonials = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <motion.div
            className={`testimonials ${isTabletOrMobile ? 'mobile' : ''}`}
            id='testimonials'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={witty1} alt='user1' />
                        <p>"I appreciate the effort put out to encourage women to pursue careers in STEM. I hope next year is even better!"</p>
                        <br />
                        <p2>- WITCON Bestie</p2>
                    </div>
                    <div className='card'>
                        <img src={witty2} alt='user1' />
                        <p>"Everyone in the event was a delight to work with. The event overall was amazing and I cannot wait for WiTCON next year..."</p>
                        <br />
                        <p2>- WITCON Bestie</p2>
                    </div>
                    <div className='card'>
                        <img src={witty3} alt='user1' />
                        <p>"Absolutely excited to see what WiTCON '24 has to offer!!"</p>
                        <br />
                        <br />
                        <br />
                        <p2>- WITCON Bestie</p2>
                    </div>
                    <br></br>
                    <p>Check out more in our Social Medias!</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Testimonials;

