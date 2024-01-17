import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sponsors.css';

const Sponsors = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='sponsors' id='sponsors'>
            <div className='container'>
                <div className='col-2'>
                    <h2>Meet our</h2>
                    <h1>SPONSORS</h1>
                    <div className="carousel-container">
                        <Slider {...settings}>
                            <div>
                                <img src="company1_logo.png" alt="Company 1" />
                                <img src="company2_logo.png" alt="Company 2" />
                                <img src="company3_logo.png" alt="Company 3" />
                                <img src="company4_logo.png" alt="Company 4" />
                            </div>
                            <div>
                                <img src="company5_logo.png" alt="Company 5" />
                                <img src="company6_logo.png" alt="Company 6" />
                                <img src="company7_logo.png" alt="Company 7" />
                                <img src="company8_logo.png" alt="Company 8" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
