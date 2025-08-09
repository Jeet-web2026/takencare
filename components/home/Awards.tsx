"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Awards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 1024, // Tablet
                settings: { slidesToShow: 2 }
            }
        ]
    };
    return (
        <section className="px-14 py-10 flex flex-col lg:flex-row items-center">
            <div className="w-1/3">
                <div className="flex mb-2">
                    <span className='col-2 uppercase font-medium text-base'>
                        <i className="ri-focus-line text-lg me-2"></i>awards
                    </span>
                </div>
                <h2 className='col-1 font-bold text-4xl capitalize'>awards</h2>
                <p className='text-sm font-medium opacity-75 col-1 mt-3'>Celebrate excellence with our prestigious awards and recognition programs that honor outstanding achievements across various fields. From corporate milestones to creative brilliance, our awards highlight innovation, dedication, and success stories that inspire others.</p>
            </div>
            <div className="w-2/3">
                <Slider {...settings}>
                    <div><img src="/images/1.jpg" alt="Slide 1" /></div>
                    <div><img src="/images/2.jpg" alt="Slide 2" /></div>
                    <div><img src="/images/3.jpg" alt="Slide 3" /></div>
                    <div><img src="/images/4.jpg" alt="Slide 4" /></div>
                </Slider>
            </div>
        </section>
    )
}

export default Awards