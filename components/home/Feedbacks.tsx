import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Feedbacks = () => {
    return (
        <section className="px-14 flex lg:flex-row flex-col items-center">
            <div className='w-1/3 flex justify-center items-center'>
                <Image src="/images/doctor_bg.png" height={500} width={500} alt='feedbacks' className='h-96 object-cover w-96 object-top' />
            </div>
            <div className='w-2/3'>
                <div className="flex mb-3">
                    <span className='col-2 uppercase font-medium text-base'>
                        <i className="ri-focus-line text-lg me-2"></i>testimonials
                    </span>
                </div>
                <h2 className='capitalize text-4xl font-bold col-1'>real patients, real stories</h2>
                <h2 className='capitalize text-4xl font-bold col-1 mb-5'>and our achivements.</h2>
                <Card className='border-0 shadow-none bg-transparent'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <Card>

                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card>

                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card>

                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious className='cursor-pointer' />
                        <CarouselNext className='cursor-pointer' /> */}
                    </Carousel>
                </Card>
            </div>
        </section>
    )
}

export default Feedbacks