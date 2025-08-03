import React from 'react'
import Whyuscard from '../extraparts/Whyuscard'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const Whyus = () => {
    return (
        <section className="py-20 px-14 flex flex-col lg:flex-row gap-12">
            <div className="w-1/2">
                <Card className='bg-transparent border-none shadow-none pt-0'>
                    <CardContent>
                        <span className='col-2 uppercase font-medium text-base'>
                            <i className="ri-focus-line text-lg me-3"></i>why choose us
                        </span>
                        <h2 className='capitalize font-bold text-4xl col-1 mt-3'>why choose us for your healthcare needs?</h2>
                        <p className='mt-8 opacity-75 col-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis maxime possimus quidem error nostrum, odit ex tempora eveniet, soluta mollitia tempore eos a, numquam aspernatur sapiente incidunt? Repudiandae, blanditiis!</p>
                        <div className="flex items-center justify-start mt-10 gap-5">
                            <Image src="/images/doctor_bg.png" height={40} width={40} alt='why-us-bg' className='h-10 w-10 rounded-full shadow-md object-cover object-top' />
                            <div className="flex justify-start items-center">
                                <i className="ri-message-2-line text-4xl col-1"></i>
                                <div className='ms-2'>
                                    <p className='capitalize col-1 text-base font-semibold -mb-1'>chat with our experts</p>
                                    <a href="tel:9163715179" className='text-sm col-1 font-medium opacity-75'>+91 9163715179</a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="w-1/2 grid grid-cols-2 items-center justify-center gap-3">
                <Whyuscard />
                <Whyuscard />
                <Whyuscard />
                <Whyuscard />
            </div>
        </section>
    )
}

export default Whyus