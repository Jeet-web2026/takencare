import React from 'react'
import { Card, CardContent } from '../ui/card'

const Whyuscard = () => {
    return (
        <Card className='shadow-xs rounded-sm p-5 border-none cursor-pointer hover:shadow-md transition-all duration-300'>
            <CardContent className='p-0'>
                <i className="ri-service-line col-2 text-4xl"></i>
                <div className='text-xl font-medium col-1 capitalize mt-2'>
                    best services
                </div>
                <p className='opacity-75 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, veniam?</p>
            </CardContent>
        </Card>
    )
}

export default Whyuscard