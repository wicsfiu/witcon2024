import React, { useState, useEffect } from 'react';
import './Footer.css';
import discord from './images/Discord.png';
import instagram from './images/Instagram.png';
import github from './images/GitHub.png';
import linkedin from './images/linkedin.png';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        // Check if user has scrolled down 100 pixels (adjust as needed)
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='footer'>
            {/* Social Media Circle Links */}
            <div className='social-links'>
                <a href='https://discord.com/invite/tAYzmDxcJ6' className='social-link'>
                    <img src={discord} alt='Discord' />
                </a>
                <a href='https://www.instagram.com/wicsfiu/?hl=es' className='social-link'>
                    <img src={instagram} alt='Instagram' />
                </a>
                <a href='https://github.com/wicsfiu' className='social-link'>
                    <img src={github} alt='GitHub' />
                </a>
                <a href='https://www.linkedin.com/company/wicsatfiu' className='social-link'>
                    <img src={linkedin} alt='LinkedIn' />
                </a>
            </div>

            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#sponsors'>Sponsors</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#faq'>FAQ</a>
                        </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                </ul>
                {/* Scroll-to-top button */}
                {showButton && (
                    <button className="scroll-to-top-button" onClick={scrollToTop}>
                        Scroll Up
                        <FaArrowUp />
                    </button>
                )}
                <br></br>
                <div className='bottom'>
                    <p className='email'>wics@fiu.edu</p>
                    <p className= 'author'>WiTCON 2024 | made with love by{' '}
          <a href="https://linktr.ee/wicsfiu" target="_blank" rel="noopener noreferrer">
            Women in Computer Science FIU
          </a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

