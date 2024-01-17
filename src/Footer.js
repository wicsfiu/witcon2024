import React from 'react';
import './Footer.css';
import discord from './images/Discord.png';
import instagram from './images/Instagram.png';
import github from './images/GitHub.png';

const Footer = () => {
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
                    <img src= {github} alt='GitHub' />
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
                <div className='bottom'>
                    <p className='email'>wics@fiu.edu</p>
                    <p className= 'author'>WITCON @ FIU 2024 |  made by Women in Tech</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
