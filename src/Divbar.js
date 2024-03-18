import React from 'react';
import './Divbar.css';
import { useMediaQuery } from 'react-responsive';

const Divbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={`divbar ${isMobile ? 'mobile' : ''}`}>
            <div className='content'>
                {/* Your content goes here */}
            </div>
        </div>
    );
}

export default Divbar;
