import React from 'react'
import { Card } from '../ui/card'

const Achive = () => {
    return (
        <div className="bg-white">
            <div className='min-w-[1300px] max-w-[1350px] mx-auto'>
                <section className='px-14 pb-8'>
                    <div className="px-10 flex lg:flex-row flex-col items-center justify-between">
                        <Card className='bg-transparent border-none shadow-none relative flex flex-col items-center justify-center w-1/4 py-0'>
                            <h2 className='uppercase font-bold text-[100px] col-2 opacity-15'>5k</h2>
                            <p className='uppercase font-bold col-1 absolute text-sm'>happy patients</p>
                        </Card>
                        <Card className='bg-transparent border-none shadow-none relative flex flex-col items-center justify-center w-1/4 py-0'>
                            <h2 className='uppercase font-bold text-[100px] col-2 opacity-15'>76</h2>
                            <p className='uppercase font-bold col-1 absolute text-sm'>specialists</p>
                        </Card>
                        <Card className='bg-transparent border-none shadow-none relative flex flex-col items-center justify-center w-1/4 py-0'>
                            <h2 className='uppercase font-bold text-[100px] col-2 opacity-15'>18</h2>
                            <p className='uppercase font-bold col-1 absolute text-sm'>centres</p>
                        </Card>
                        <Card className='bg-transparent border-none shadow-none relative flex flex-col items-center justify-center w-1/4 py-0'>
                            <h2 className='uppercase font-bold text-[100px] col-2 opacity-15'>24</h2>
                            <p className='uppercase font-bold col-1 absolute text-sm'>winning awards</p>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Achive