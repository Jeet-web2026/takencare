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
        <section className='px-14'>
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
                            <Image src="/images/doctor_bg.png" height={180} width={180} alt='team-members' className='h-64 w-50 object-cover object-top' />
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 flex justify-center items-center">
                            <Image src="/images/main-bg-image.png" height={180} width={180} alt='team-members' className='h-64 w-50 object-cover object-top' />
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 flex justify-center items-center">
                            <Image src="/images/doctor_bg.png" height={180} width={180} alt='team-members' className='h-64 w-50 object-cover object-top' />
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 flex justify-center items-center">
                            <Image src="/images/doctor_bg.png" height={180} width={180} alt='team-members' className='h-64 w-50 object-cover object-top' />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer p-5' />
                    <CarouselNext className='cursor-pointer p-5' />
                </Carousel>
            </Card>
        </section>
    )
}

export default Ourteam