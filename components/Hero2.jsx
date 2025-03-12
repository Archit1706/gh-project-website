import React from 'react'

const Hero2 = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Advancing Research Through
                        <br className="hidden lg:inline-block" />
                        Innovation & Technology
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Welcome to our research portfolio showcasing groundbreaking projects
                        and published papers across various domains including AI, Machine Learning,
                        Healthcare, and Smart Infrastructure.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            View Projects
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Read Our Papers
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/images/research-hero.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Hero2