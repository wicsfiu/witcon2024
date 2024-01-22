import React from 'react';
import user1 from './images/user1.jpeg';
import user2 from './images/user2.jpeg';
import user3 from './images/user3.jpeg';
import { motion } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    return (
        <motion.div
            className='faq'
            id='faq'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}  // Add motion while hovering
        >
            <div className='container'>
                <h2> F.A.Q</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Question</p>
                        <p><span>Answer</span></p>
                        <p>Answer</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Question</p>
                        <p><span>Answer</span></p>
                        <p>Answer</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Question</p>
                        <p><span>Answer</span></p>
                        <p>Answer</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default FAQ;
