import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Sponsors.css';
import flyerImage from './images/flyer.jpg';

const items = [
    { id: 1, title: 'flyer', image: flyerImage, link: 'https://github.com/wicsfiu' },
    { id: 2, title: 'flyer', image: flyerImage, link: 'https://github.com/wicsfiu' },
    // Add more items with images and links
];

const Sponsors = () => {
    return (
        <div className='sponsors' id='sponsors'>
            <div className='container'>
                <div className='col-2'>
                    <h2>Meet our</h2>
                    <h1>SPONSORS</h1>
                    <div className="carousel-container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 30, // Adjust the rotate value
                                stretch: 10, // Adjust the stretch value
                                depth: 60, // Adjust the depth value
                                modifier: 2, // Adjust the modifier value
                                slideShadows: false, // Disable slide shadows
                            }}
                            pagination={true}
                            className="mySwiper"
                        >
                            {items.map(item => (
                                <SwiperSlide key={item.id}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt={`item ${item.id}`} />
                                        <div className="image-overlay">
                                            <p>{item.title}</p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
