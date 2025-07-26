import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export const Home = () => {
  return (
    <main className='flex justify-center items-center lg:flex-row flex-col h-screen px-14 bg-3 pt-8'>
      <div className='w-2/4 relative h-full flex justify-center items-center'>
        <div>
          <h1 className='text-black text-7xl font-semibold col-1'>Medical and Healthcare Services</h1>
          <div className='mt-3'>
            <p className='opacity-75'>Your health is our top priority. Schdule an appointment</p>
            <p className='opacity-75'> with us today.</p>
            <div className="flex flex-row items-center">
              <Button className='bg-2 mt-4 capitalize cursor-pointer shadow-sm hover:shadow-md duration-300 me-3'>
                read more<i className="ri-arrow-right-line"></i>
              </Button>
              <Button className='bg-transparent mt-4 capitalize cursor-pointer hover:bg-transparent shadow-none col-1 duration-300'>
                <i className="ri-play-line text-lg col-2"></i>watch more
              </Button>
            </div>
            <div className="absolute left-0 bottom-11 flex flex-row items-center">
              <Card className='bg-white p-2 rounded-md shadow-md border border-gray-100 rounded-r-none'>
                <Image src="/images/doctor_bg.png" alt="doctor-main-background-image" height={100} width={32} className='h-auto w-auto' />
              </Card>
              <Card className='bg-white p-2 rounded-r-lg pe-3 shadow-md border border-gray-100 gap-0 rounded-l-none'>
                Have a Question?
                <a href="mailto:jeetnath2110@gmail.com" className='col-2 font-medium'>contact.us@gmail.com</a>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/4 flex justify-end items-center relative h-full'>
        <div>
          <Image src="/images/main-bg-image.png" alt="doctor-main-background-image" height={500} width={500} className='absolute bottom-0 right-5 h-[540px] w-[530px] z-10' />
          <div className="h-[550px] rounded-t-full w-160 bg-white absolute bottom-0 -right-8"></div>
          <div className="bg-white p-1 shadow-sm absolute right-10 top-65 rounded-md z-20">
            <Image src="/images/heart-image.png" alt="human-heart" height={60} width={60} className='h-auto w-auto' />
          </div>
        </div>
        <Card className='bg-white z-20 py-2 rounded-r-lg shadow-md border-none flex flex-row items-center absolute bottom-10 left-18'>
          <CardContent className='p-0'>
            <div className="flex justify-center items-center mb-2">
              <div className='border py-7 border-[#00bcdf] px-4.5 rounded-full'>
                <h3 className='text-3xl font-medium col-2 text-center'>82%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center border-t px-3 pt-3">
              <p className='capitalize col-1 me-7 text-sm font-medium'>successfull <span className="block">diaglosis</span></p>
              <span className='p-1 px-2 shadow-md rounded-full cursor-pointer'>
                <i className="ri-arrow-right-up-line text-base"></i>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
