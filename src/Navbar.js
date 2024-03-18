import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/wit.png';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

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
                        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="sponsors" smooth={true} duration={500} onClick={closeMenu}>
                            Sponsors
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Itinerary" smooth={true} duration={500} onClick={closeMenu}>
                            Itinerary
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="wrapper" smooth={true} duration={500} onClick={closeMenu}>
                            FAQ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href='https://wicsfiu.github.io/witcon/' className='witcon23-button' onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                            WITCON 23'
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
