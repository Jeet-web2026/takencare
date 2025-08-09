"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Card } from '../ui/card';

const Awards = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            }
        ]
    };
    return (
        <section className="px-14 py-10 flex flex-col lg:flex-row items-center">
            <div className="w-1/4">
                <div className="flex mb-2">
                    <span className='col-2 uppercase font-medium text-base'>
                        <i className="ri-focus-line text-lg me-2"></i>awards
                    </span>
                </div>
                <h2 className='col-1 font-bold text-4xl capitalize'>awards</h2>
                <p className='text-sm font-medium opacity-75 col-1 mt-3'>Celebrate excellence with our prestigious awards and recognition programs that honor outstanding achievements across various fields.</p>
            </div>
            <div className="w-3/4">
                <div className='ps-10'>
                    <Slider {...settings}>
                        <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                            <Card className='rounded-sm border-none shadow-xs p-3'>
                                <h3 className='capitalize col-1 font-bold text-lg text-center'>Excellence in Patient Care Award</h3>
                            </Card>
                        </Card>
                        <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                            <Card className='rounded-sm border-none shadow-xs p-3'>
                                <h3 className='capitalize col-1 font-bold text-lg text-center'>Innovative Medical Research Award</h3>
                            </Card>
                        </Card>
                        <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                            <Card className='rounded-sm border-none shadow-xs p-3'>
                                <h3 className='capitalize col-1 font-bold text-lg text-center'>Outstanding Surgeon of the Year</h3>
                            </Card>
                        </Card>
                        <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                            <Card className='rounded-sm border-none shadow-xs p-3'>
                                <h3 className='capitalize col-1 font-bold text-lg text-center'>Healthcare Leadership Excellence</h3>
                            </Card>
                        </Card>
                        <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                            <Card className='rounded-sm border-none shadow-xs p-3'>
                                <h3 className='capitalize col-1 font-bold text-lg text-center'>Public Health & Mind Impact Award</h3>
                            </Card>
                        </Card>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Awards