import React from 'react'
import { Card } from '../ui/card'
import { ChartColumnStackedIcon, CheckCircle, MessageSquareDotIcon, } from 'lucide-react'

const Howitworks = () => {
    return (
        <section className="px-14 py-10">
            <div className="flex mb-2 justify-center items-center">
                <span className='col-2 uppercase font-medium text-base'>
                    <i className="ri-focus-line text-lg me-2"></i>how it work
                </span>
            </div>
            <h2 className='text-center col-1 text-4xl font-bold capitalize'>how it work</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                <Card className='rounded-lg shadow-xs hover:shadow-lg border-none gap-0 p-10 bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
                    <div className="flex justify-center items-center mb-5">
                        <CheckCircle className="w-12 h-12 col-2 border p-1.5 rounded-full border-[#152562]" />
                    </div>
                    <h4 className='col-1 text-center font-medium capitalize text-lg'>books an appointment</h4>
                    <p className='text-center col-1 text-sm font-medium opacity-75 mt-3'>Looking for a simple and reliable way to book your next appointment? Our online booking system makes it easy to schedule appointments for book consultations.</p>
                </Card>
                <Card className='rounded-lg shadow-xs hover:shadow-lg border-none gap-0 p-10 bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
                    <div className="flex justify-center items-center mb-5">
                        <MessageSquareDotIcon className="w-12 h-12 col-2 border p-1.5 rounded-full border-[#152562]" />
                    </div>
                    <h4 className='col-1 text-center font-medium capitalize text-lg'>discuss your problems</h4>
                    <p className='text-center col-1 text-sm font-medium opacity-75 mt-3'>Looking for a simple and reliable way to book your next appointment? Our online booking system makes it easy to schedule appointments for book consultations.</p>
                </Card>
                <Card className='rounded-lg shadow-xs hover:shadow-lg border-none gap-0 p-10 bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
                    <div className="flex justify-center items-center mb-5">
                        <ChartColumnStackedIcon className="w-12 h-12 col-2 border p-1.5 rounded-full border-[#152562]" />
                    </div>
                    <h4 className='col-1 text-center font-medium capitalize text-lg'>treatment start</h4>
                    <p className='text-center col-1 text-sm font-medium opacity-75 mt-3'>Looking for a simple and reliable way to book your next appointment? Our online booking system makes it easy to schedule appointments for book consultations.</p>
                </Card>
            </div>
        </section>
    )
}

export default Howitworks