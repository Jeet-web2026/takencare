import React from 'react'
import { Card } from '../ui/card'

const servicescard = () => {
    return (
        <Card className='border-none bg-white row-span-3 p-4 rounded-lg shadow-xs gap-0 cursor-pointer group hover:shadow-lg transition-all duration-300'>
            <div className='mb-3'>
                <i className="ri-dna-line text-3xl col-2 group-hover:rotate-45 rotate"></i>
            </div>
            <h4 className='capitalize font-bold col-1 mb-3'>cardiology</h4>
            <p className='text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui blanditiis, nobis impedit iure nesciunt!</p>
            <span className='border opacity-75 rounded-full my-3'></span>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <i className="ri-focus-2-fill text-green-600 text-xs"></i>
                    <span className='text-xs ms-2 capitalize'>22+ doctors</span>
                </div>
                <div className='bg-2 rounded-full px-1'>
                    <i className="ri-arrow-right-up-line text-white text-lg font-medium"></i>
                </div>
            </div>
        </Card>
    )
}

export default servicescard