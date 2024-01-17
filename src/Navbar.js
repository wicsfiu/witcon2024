import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/wit.png';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset as needed
                behavior: 'smooth',
            });
            closeMenu();
        }
    };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: '#ffffff' }} />
                    ) : (
                        <FaBars size={30} style={{ color: '#ffffff' }} />
                    )}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/' onClick={(e) => handleSmoothScroll(e, 'home')}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={(e) => handleSmoothScroll(e, 'about')}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#sponsors' onClick={(e) => handleSmoothScroll(e, 'sponsors')}>
                            Sponsors
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#faq' onClick={(e) => handleSmoothScroll(e, 'faq')}>
                            FAQ
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            href='#testimonials'
                            onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                        >
                            Testimonials
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
