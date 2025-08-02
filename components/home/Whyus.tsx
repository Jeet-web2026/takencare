import Image from 'next/image'
import React from 'react'

const Whyus = () => {
    return (
        <section className="bg-1 p-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-1/2 flex flex-col lg:flex-row items-center justify-center gap-3">
                <Image src="/images/about-bg.jpg" height={400} width={400} alt='why-choose-us' className='h-90 object-cover w-1/2 rounded-md' />
                <div className='w-1/3'>
                    <Image src="/images/main-bg-image.png" height={400} width={400} alt='why-choose-us' className='h-70 object-cover w-full rounded-md bg-white object-top' />
                </div>
            </div>
        </section>
    )
}

export default Whyus