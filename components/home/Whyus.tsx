import React from 'react'
import Whyuscard from '../extraparts/Whyuscard'

const Whyus = () => {
    return (
        <section className="p-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-1/2 flex flex-col lg:flex-row items-center justify-center gap-3">
            <Whyuscard />
            </div>
        </section>
    )
}

export default Whyus