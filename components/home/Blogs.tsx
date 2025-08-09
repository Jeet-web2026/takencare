import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

const Blogs = () => {
    return (
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
                <div className="w-1/3">
                    <Card></Card>
                </div>
                <div className="w-2/3 grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
