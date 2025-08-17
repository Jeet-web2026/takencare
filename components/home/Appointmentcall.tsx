import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Appointmentcall = () => {
    return (
        <div className='min-w-[1300px] max-w-[1350px] mx-auto'>
            <section className='px-14 flex h-100 flex-col lg:flex-row realative items-center justify-between gap-10'>
                <div className='w-1/2 relative h-full'>
                    <Image src="/images/successfull-team.png" height={100} width={400} alt='appointment-call' className='w-full h-100 object-cover rounded-4xl absolute bottom-0' />
                </div>
                <div className='w-1/2 relative flex justify-end items-center'>
                    <div className="bg-1 p-2 pt-1.5 rounded-lg rounded-tr-none left-11.5 top-25 rounded-tl-none text-white uppercase font-bold rotate-90 absolute h-9">free counselling</div>
                    <Card className='w-3/4 border-none p-6 shadow-l transition-all gap-0 duration-300'>
                        <h2 className='capitalize font-bold text-3xl col-1'>book an <span className='col-2'>appointment</span></h2>
                        <p className='text-sm capitalize font-medium col-1'>submit your enquiry and get a quick call</p>
                        <form action="" method="post" className='mt-5'>
                            <div className="flex flex-col lg:flex-row gap-5">
                                <Input className='mb-5' type='text' placeholder='Full name' />
                                <Input className='mb-5' type='number' placeholder='Contact number' />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5">
                                <Input className='mb-5' type='email' placeholder='Email address' />
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Departments</SelectLabel>
                                            <SelectItem value="Example">Example</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <Textarea className='mb-4' placeholder='Type your message here.' />
                            </div>
                            <Button className='w-full cursor-pointer bg-2 py-5 text-lg rounded-full shadow-sm hover:shadow-md mt-5'>Enquire now</Button>
                        </form>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default Appointmentcall