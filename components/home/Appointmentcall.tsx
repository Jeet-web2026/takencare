import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const Appointmentcall = () => {
    return (
        <section className='px-14 flex h-100 flex-col lg:flex-row realative items-center justify-between gap-10'>
            <div className='w-1/2 relative h-full'>
                <Image src="/images/successfull-team.png" height={100} width={400} alt='appointment-call' className='w-full h-100 object-cover rounded-4xl absolute bottom-0' />
            </div>
            <div className='w-1/2 relative flex justify-end items-center'>
                <Card className='w-3/4 border-none p-6 shadow-l transition-all gap-0 duration-300'>
                    <h2 className='capitalize font-bold text-3xl col-1'>book an <span className='col-2'>appointment</span></h2>
                    <p className='text-sm capitalize font-medium col-1'>submit your enquiry and get a quick call</p>
                    <form action="" method="post" className='mt-5'>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <Input className='mb-5' />
                            <Input className='mb-5' />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <Input className='mb-5' />
                            <Input className='mb-5' />
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <Input className='mb-5' />
                        </div>
                        <Button className='w-full cursor-pointer bg-2 rounded-full shadow-sm hover:shadow-md mt-5'>Enquire now</Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}

export default Appointmentcall