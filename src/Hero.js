import React from 'react';
import './Hero.css';
import flyer from "./images/flyer.jpg";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <div className='text-container'>
                    <p>Welcome to</p>
                    <p>WITCON 2024</p>
                    <p>Woman in Technology Conference</p>
                    <button href='/' className='button'>Register Today!</button>
                    <button href='/' className='button schedule-button'>Event Schedule</button>
                </div>
            </div>
            <div className='image'>
                <img src={flyer} alt='Flyer' />
</div>
        </div>
    );
}

export default Hero;

