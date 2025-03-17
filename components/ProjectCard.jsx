import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ title, description, tags, imageUrl, paperUrl, demoUrl, category, facultyAdvisor, achievement }) => {
    // Create a URL-friendly slug from the title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    return (
        <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {achievement ? (
                    <Link href={`/projects/${slug}`}>
                        <Image
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={imageUrl}
                            alt={title}
                            width={720}
                            height={500}
                        />
                    </Link>
                ) : (
                    <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={imageUrl}
                        alt={title}
                        width={720}
                        height={500}
                    />
                )}
                <div className="p-6">
                    {/* Category */}
                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                        {category}
                    </h2>

                    {/* Faculty Advisor */}
                    <p className="text-sm text-gray-500 mb-2">
                        Faculty Advisor: {facultyAdvisor}
                    </p>

                    {/* Achievement */}
                    {achievement && (
                        <p className="text-sm text-green-600 font-medium mb-3">
                            {achievement}
                        </p>
                    )}

                    {/* Title */}
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {achievement ? (
                            <Link href={`/projects/${slug}`} className="hover:text-blue-600">
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed mb-3">
                        {description}
                    </p>

                    {/* Links */}
                    <div className="flex items-center flex-wrap">
                        {paperUrl && (
                            <a
                                href={paperUrl}
                                className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 mr-4 hover:text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Paper
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </a>
                        )}
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                className="text-green-500 inline-flex items-center hover:text-green-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Demo
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        )}
                        {achievement && (
                            <Link
                                href={`/projects/${slug}`}
                                className="ml-auto text-blue-500 inline-flex items-center hover:text-blue-600"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

