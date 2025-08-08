import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel"

const Feedbacks = () => {
    return (
        <section className="px-14 flex lg:flex-row flex-col items-center">
            <div className='w-1/3 flex justify-center items-center'>
                <Image src="/images/doctor_bg.png" height={500} width={500} alt='feedbacks' className='h-120 object-cover w-96 object-top' />
            </div>
            <div className='w-2/3'>
                <div className="flex mb-3">
                    <span className='col-2 uppercase font-medium text-base'>
                        <i className="ri-focus-line text-lg me-2"></i>testimonials
                    </span>
                </div>
                <h2 className='capitalize text-4xl font-bold col-1'>real patients, real stories</h2>
                <h2 className='capitalize text-4xl font-bold col-1 mb-5'>and our achivements.</h2>
                <Card className='border-0 shadow-none bg-transparent pb-0'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <Card className='border-0 shadow-xs rounded-2xl flex flex-row items-center py-0 overflow-hidden gap-0'>
                                    <Card className='border-0 bg-transparent shadow-none py-0 w-1/3'>
                                        <Image src="/images/feedback-bg.jpg" height={400} width={200} alt='feedback' className='h-64 w-full object-cover' />
                                    </Card>
                                    <Card className='border-0 bg-transparent shadow-none w-2/3 p-5 gap-3'>
                                        <p className='col-2 font-medium text-base capitalize'>john doe</p>
                                        <span className='text-base '>LoremI had an excellent experience at [Institution Name]. The staff was highly professional, caring, and attentive to every detail. The doctors took the time to explain everything clearly, making me feel comfortable and confident in my treatment. The facilities are modern, clean, and well-maintained. I truly appreciate their commitment to patient care and would highly recommend them to anyone seeking quality medical services.</span>
                                    </Card>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className='border-0 shadow-xs rounded-2xl flex flex-row items-center py-0 overflow-hidden gap-0'>
                                    <Card className='border-0 bg-transparent shadow-none py-0 w-1/3'>
                                        <Image src="/images/feedback-bg.jpg" height={400} width={200} alt='feedback' className='h-64 w-full object-cover' />
                                    </Card>
                                    <Card className='border-0 bg-transparent shadow-none w-2/3 p-5 gap-3'>
                                        <p className='col-2 font-medium text-base capitalize'>john doe</p>
                                        <span className='text-base '>LoremI had an excellent experience at [Institution Name]. The staff was highly professional, caring, and attentive to every detail. The doctors took the time to explain everything clearly, making me feel comfortable and confident in my treatment. The facilities are modern, clean, and well-maintained. I truly appreciate their commitment to patient care and would highly recommend them to anyone seeking quality medical services.</span>
                                    </Card>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card className='border-0 shadow-xs rounded-2xl flex flex-row items-center py-0 overflow-hidden gap-0'>
                                    <Card className='border-0 bg-transparent shadow-none py-0 w-1/3'>
                                        <Image src="/images/feedback-bg.jpg" height={400} width={200} alt='feedback' className='h-64 w-full object-cover' />
                                    </Card>
                                    <Card className='border-0 bg-transparent shadow-none w-2/3 p-5 gap-3'>
                                        <p className='col-2 font-medium text-base capitalize'>john doe</p>
                                        <span className='text-base '>LoremI had an excellent experience at [Institution Name]. The staff was highly professional, caring, and attentive to every detail. The doctors took the time to explain everything clearly, making me feel comfortable and confident in my treatment. The facilities are modern, clean, and well-maintained. I truly appreciate their commitment to patient care and would highly recommend them to anyone seeking quality medical services.</span>
                                    </Card>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNext className='cursor-pointer right-0 rounded-none rounded-r-2xl bg-[#00bcdf] text-white px-7 h-full hover:bg-[#152562] hover:text-white transition duration-300 ease-in-out' />
                    </Carousel>
                </Card>
            </div>
        </section>
    )
}

export default Feedbacks
