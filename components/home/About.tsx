import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const About = () => {
    return (
        <section className='px-14 py-13 flex lg:flex-row flex-col items-center gap-12 bg-[#f2f9ff73] relative'>
            <Card className='absolute z-20 p-0 overflow-hidden ps-5 border-15 top-70 left-0 rounded-r-4xl flex flex-row bg-1 border-l-0 border-[#00bcdf]'>
                <div className="relative">
                    <p className='uppercase text-md font-bold rotate-90 text-white absolute w-[200px] top-[52%] -left-25'>videocall support</p>
                </div>
                <Image src="/images/main-bg-image.png" height={200} width={200} alt='video-calling-support' className='bg-white shadow-md' />
            </Card>
            <div className="w-2/4">
                <Card className='border-none shadow-none flex justify-center bg-transparent items-center w-full py-0'>
                    <Image src="/images/about-bg.jpg" height={400} width={400} alt='about-bg' className='w-full h-115 object-cover rounded-4xl shadow-md' />
                </Card>
            </div>
            <div className="w-2/4">
                <span className='col-2 uppercase font-medium text-base'>
                    <i className="ri-focus-line text-lg me-3"></i>about us
                </span>
                <h2 className='capitalize col-1 mt-2 font-bold text-4xl'>world class patient <span className="block mt-2">facilities designed for you</span></h2>
                <p className='col-1 text-base opacity-75 mb-5 mt-5 font-medium'>Our Hospital Management System offers a complete digital solution for hospitals, clinics, and healthcare providers to manage patient records, appointments, billing, and staff efficiently. Built with advanced security and scalability in mind, it simplifies healthcare operations while ensuring data accuracy and regulatory compliance.</p>
                <div className="flex flex-row items-center">
                    <ul className='me-10'>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                    </ul>
                    <ul>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                        <li className='text-base font-medium col-1'><i className="ri-check-line me-2 col-2 text-lg"></i>Research and Development</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-start mt-6 items-center">
                    <Button className='bg-2 cursor-pointer text-base me-3'>
                        About us<i className="ri-arrow-right-line"></i>
                    </Button>
                    <div className='flex flex-row items-center col-1 text-base font-medium'>
                        <i className="ri-phone-line text-4xl"></i>
                        <span className='ms-2'>
                            <p className='text-sm opacity-75 capitalize'>contact us</p>
                            +91 9163715179
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About