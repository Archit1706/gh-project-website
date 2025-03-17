import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectDetail = ({ title, description, tags, imageUrl, paperUrl, demoUrl, category, facultyAdvisor, achievement }) => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-white min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto">
                    <div className="mb-6">
                        <h2 className="text-sm title-font text-blue-500 tracking-widest mb-1">{category}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">{title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="text-gray-600">Faculty Advisor: {facultyAdvisor}</span>
                            </span>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                            <p className="text-green-700">{achievement}</p>
                        </div>
                    </div>

                    <div className="relative w-full mb-8 group bg-white">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <Image
                                alt={title}
                                className="w-full h-auto object-contain"
                                src={imageUrl}
                                width={1920}
                                height={1080}
                                priority
                                quality={100}
                            />
                            <a
                                href={imageUrl}
                                download
                                className="absolute bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-600 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Image
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 bg-white">
                        <p className="leading-relaxed mb-4 text-lg text-gray-700">{description}</p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {paperUrl && (
                                <a
                                    href={paperUrl}
                                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded flex items-center gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Read Paper
                                </a>
                            )}
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded flex items-center gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <Link href="/" className="text-blue-500 inline-flex items-center hover:text-blue-600 gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail 