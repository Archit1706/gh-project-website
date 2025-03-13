import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="/images/home/fall2024.jpg"
                                width={720}
                                height={600}
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            Fall 2024 Projects
                        </h2>
                        <p className="leading-relaxed text-base">
                            List of Fall 2024 projects and their respective achievements.
                        </p>
                        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                            <Link href={"/fall2024"}>
                                View
                            </Link>
                        </button>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="/images/home/spring2024.jpg"
                                width={720}
                                height={600}
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            Spring 2024 Projects
                        </h2>
                        <p className="leading-relaxed text-base">
                            List of Spring 2024 projects and their respective achievements.
                        </p>

                        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                            <Link href={"/spring2024"}>
                                View
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero