import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const Blogs = () => {
    return (
        <div className='min-w-[1300px] max-w-[1350px] mx-auto'>
            <section className="px-14 py-10">
                <div className="flex mb-2">
                    <span className="col-2 uppercase font-medium text-base">
                        <i className="ri-focus-line text-lg me-2"></i>Blogs
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl col-1 font-bold capitalize">
                        our latest hospital blogs
                    </h2>
                    <Link href="/blogs" className="text-base font-medium col-2 capitalize">
                        see full blogs<i className="ri-arrow-right-s-line ms-1"></i>
                    </Link>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 mt-8">
                    <div className="w-1/4">
                        <Card className="bg-transparent border-none shadow-none relative gap-0 py-0 overflow-hidden">
                            <div className="absolute bg-[#00000082] w-full h-full"></div>
                            <Image src="/images/main-bg-image.png" height={300} width={400} alt="Blog Image" className="w-full h-75 object-top bg-white object-cover rounded-lg" />
                            <p className="absolute capitalize font-medium col-1 text-base px-4 shadow-sm rounded-xl top-4.5 left-3.5 z-10 bg-white">best medicare</p>
                            <p className="absolute bottom-2.5 left-3.5 font-medium text-white text-base">Sharing ideas, stories, and insights through engaging blog posts.</p>
                        </Card>
                    </div>
                    <div className="w-3/4 grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <Card className="bg-transparent border-none shadow-none relative gap-0 py-0 overflow-hidden">
                            <div className="absolute bg-[#00000082] w-full h-full"></div>
                            <Image src="/images/main-bg-image.png" height={300} width={400} alt="Blog Image" className="w-full h-75 object-top bg-white object-cover rounded-lg" />
                            <p className="absolute capitalize font-medium col-1 text-base px-4 shadow-sm rounded-xl top-4.5 left-3.5 z-10 bg-white">best medicare</p>
                            <p className="absolute bottom-2.5 left-3.5 font-medium text-white text-base">Sharing ideas, stories, and insights through engaging blog posts.</p>
                        </Card>
                        <div className="grid grid-cols-1 gap-4">
                            <Card className="bg-transparent border-none shadow-none relative gap-0 py-0 overflow-hidden">
                                <div className="absolute bg-[#00000082] w-full h-full"></div>
                                <Image src="/images/main-bg-image.png" height={300} width={400} alt="Blog Image" className="w-full h-35 object-top bg-white object-cover rounded-lg" />
                                <p className="absolute capitalize font-medium col-1 text-base px-4 shadow-sm rounded-xl top-4.5 left-3.5 z-10 bg-white">best medicare</p>
                            </Card>
                            <Card className="bg-transparent border-none shadow-none relative gap-0 py-0 overflow-hidden">
                                <div className="absolute bg-[#00000082] w-full h-full"></div>
                                <Image src="/images/main-bg-image.png" height={300} width={400} alt="Blog Image" className="w-full h-35 object-top bg-white object-cover rounded-lg" />
                                <p className="absolute capitalize font-medium col-1 text-base px-4 shadow-sm rounded-xl top-4.5 left-3.5 z-10 bg-white">best medicare</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
