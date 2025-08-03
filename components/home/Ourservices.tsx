import React from 'react'
import Servicescard from '../extraparts/Servicescard'
const Ourservices = () => {
    return (
        <section className="px-14 pb-10">
            <div className="flex justify-center items-center mb-2">
                <span className='col-2 uppercase font-medium text-base'>
                    <i className="ri-focus-line text-lg me-2"></i>our services
                </span>
            </div>
            <h2 className='capitalize col-1 text-4xl font-bold text-center'>start feeling your best</h2>
            <h2 className='capitalize col-1 text-4xl font-bold text-center'>explore our wellness services</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                <Servicescard />
                <Servicescard />
                <Servicescard />
                <Servicescard />
                <Servicescard />
                <Servicescard />
                <Servicescard />
                <Servicescard />
            </div>
        </section>
    )
}

export default Ourservices