import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Card } from '../ui/card'

const Ourteam = () => {
    return (
        <div className='min-w-[1300px] max-w-[1350px] mx-auto'>
            <section className='px-14 py-10'>
                <div className="flex justify-center items-center mb-3">
                    <span className='col-2 uppercase font-medium text-base'>
                        <i className="ri-focus-line text-lg me-2"></i>our team
                    </span>
                </div>
                <h2 className='text-center text-4xl font-bold col-1 capitalize'>Meet our high qualified team</h2>
                <Card className='bg-transparent shadow-none border-0'>
                    <Carousel
                        className='mx-14 py-10'
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/doctor_bg.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/doctor_bg.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center items-center">
                                <div>
                                    <Image src="/images/main-bg-image.png" height={150} width={150} alt='team-members' className='h-70 w-50 object-cover object-top' />
                                    <h5 className='capitalize text-center font-semibold text-xl mt-2'>john doe</h5>
                                    <h6 className='capitalize col-2 text-center'>therapist</h6>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='cursor-pointer p-5' />
                        <CarouselNext className='cursor-pointer p-5' />
                    </Carousel>
                </Card>
            </section>
        </div>
    )
}

export default Ourteam