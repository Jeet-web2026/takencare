import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Ourteam = () => {
    return (
        <section className='px-14'>
            <div className="flex justify-center items-center mb-2">
                <span className='col-2 uppercase font-medium text-base'>
                    <i className="ri-focus-line text-lg me-2"></i>our team
                </span>
            </div>
            <Carousel className='mx-14'>
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default Ourteam