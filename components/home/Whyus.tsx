import React from 'react'
import Whyuscard from '../extraparts/Whyuscard'
import { Card, CardContent } from '../ui/card'

const Whyus = () => {
    return (
        <section className="p-20 flex flex-col lg:flex-row gap-12">
            <div className="w-1/2">
                <Card className='bg-transparent border-none shadow-none'>
                    <CardContent>
                        <span className='col-2 uppercase font-medium text-base'>
                            <i className="ri-focus-line text-lg me-3"></i>why choose us
                        </span>
                        <h2 className='capitalize font-bold text-4xl col-1 mt-3'>why choose us for your healthcare needs?</h2>
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