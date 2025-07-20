import { Button } from '../ui/button'

export const Home = () => {
  return (
    <main className='flex justify-center items-center lg:flex-row flex-col h-screen px-10 bg-3 pt-10'>
      <div className='w-1/4'>
        <h1 className='capitalize text-black text-7xl font-semibold col-1'>medical & <span className='block my-2.5'>healthcare</span> <span className='block col-2'>services</span></h1>
        <div className='mt-3'>
          <p className='opacity-75'>Your health is our top priority. Schdule an appointment with us today.</p>
          <div className="flex flex-row items-center">
            <Button className='bg-2 mt-4 capitalize cursor-pointer shadow-sm hover:shadow-md duration-300 me-3'>
              read more<i className="ri-arrow-right-line"></i>
            </Button>
            <Button className='bg-transparent mt-4 capitalize cursor-pointer hover:bg-transparent shadow-none col-1 duration-300'>
              <i className="ri-play-line text-lg col-2"></i>watch more
            </Button>
          </div>
        </div>
      </div>
      <div className='w-3/4'>

      </div>
    </main>
  )
}
