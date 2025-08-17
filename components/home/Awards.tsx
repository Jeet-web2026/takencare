"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Card } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

const Awards = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="bg-[#00bcdf0f]">
            <div className='min-w-[1300px] max-w-[1350px] mx-auto'>
                <section className="px-14 py-10 flex flex-col lg:flex-row items-center">
                    <div className="w-1/4">
                        <div className="flex mb-2">
                            <span className='col-2 uppercase font-medium text-base'>
                                <i className="ri-focus-line text-lg me-2"></i>awards
                            </span>
                        </div>
                        <h2 className='col-1 font-bold text-4xl capitalize'>awards</h2>
                        <p className='text-sm font-medium opacity-75 col-1 mt-3'>Celebrate excellence with our prestigious awards and recognition programs that honor outstanding achievements across various fields.</p>
                        <Button variant="outline" className='rounded-4xl border hover:bg-transparent mt-5 cursor-pointer text-base text-white px-4 bg-[#00bcdf] transition-all duration-300 hover:text-[#00bcdf] hover:border-[#00bcdf]'>
                            View all<i className="ri-arrow-right-up-line text-xl"></i>
                        </Button>
                    </div>
                    <div className="w-3/4">
                        <div className='ps-10'>
                            <Slider {...settings} className='items-center'>
                                <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                                    <Card className='rounded-sm border-none shadow-xs px-3 pt-5 pb-10 gap-0'>
                                        <div className="flex justify-center items-center mb-2">
                                            <Image src="/images/award.png" height={100} width={100} alt="Award Image" className="w-25 h-25 rounded-full object-cover" />
                                        </div>
                                        <h3 className='capitalize col-1 font-bold text-sm text-center mb-2'>Excellence in Patient Care</h3>
                                        <p className='text-center text-sm opacity-75 col-1 font-medium'>Honoring exceptional dedication and compassion in delivering patient care.</p>
                                    </Card>
                                </Card>
                                <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                                    <Card className='rounded-sm border-none shadow-xs px-3 pt-5 pb-10 gap-0'>
                                        <div className="flex justify-center items-center mb-2">
                                            <Image src="/images/award.png" height={100} width={100} alt="Award Image" className="w-25 h-25 rounded-full object-cover" />
                                        </div>
                                        <h3 className='capitalize col-1 font-bold text-sm text-center mb-2'>Excellence in Patient Care</h3>
                                        <p className='text-center text-sm opacity-75 col-1 font-medium'>Honoring exceptional dedication and compassion in delivering patient care.</p>
                                    </Card>
                                </Card>
                                <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                                    <Card className='rounded-sm border-none shadow-xs px-3 pt-5 pb-10 gap-0'>
                                        <div className="flex justify-center items-center mb-2">
                                            <Image src="/images/award.png" height={100} width={100} alt="Award Image" className="w-25 h-25 rounded-full object-cover" />
                                        </div>
                                        <h3 className='capitalize col-1 font-bold text-sm text-center mb-2'>Excellence in Patient Care</h3>
                                        <p className='text-center text-sm opacity-75 col-1 font-medium'>Honoring exceptional dedication and compassion in delivering patient care.</p>
                                    </Card>
                                </Card>
                                <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                                    <Card className='rounded-sm border-none shadow-xs px-3 pt-5 pb-10 gap-0'>
                                        <div className="flex justify-center items-center mb-2">
                                            <Image src="/images/award.png" height={100} width={100} alt="Award Image" className="w-25 h-25 rounded-full object-cover" />
                                        </div>
                                        <h3 className='capitalize col-1 font-bold text-sm text-center mb-2'>Excellence in Patient Care</h3>
                                        <p className='text-center text-sm opacity-75 col-1 font-medium'>Honoring exceptional dedication and compassion in delivering patient care.</p>
                                    </Card>
                                </Card>
                                <Card className='py-5 px-2 bg-transparent border-none shadow-none'>
                                    <Card className='rounded-sm border-none shadow-xs px-3 pt-5 pb-10 gap-0'>
                                        <div className="flex justify-center items-center mb-2">
                                            <Image src="/images/award.png" height={100} width={100} alt="Award Image" className="w-25 h-25 rounded-full object-cover" />
                                        </div>
                                        <h3 className='capitalize col-1 font-bold text-sm text-center mb-2'>Excellence in Patient Care</h3>
                                        <p className='text-center text-sm opacity-75 col-1 font-medium'>Honoring exceptional dedication and compassion in delivering patient care.</p>
                                    </Card>
                                </Card>
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Awards