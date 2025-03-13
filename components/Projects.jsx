
import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const Projects = (props) => {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        BizAI Innovation Lab Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Showcasing our groundbreaking research projects and achievements across different semesters.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">{props.semester} Projects</h2>
                <div className="flex flex-wrap -m-4 mb-12">
                    {Array.isArray(props.projects) && props.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
            <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                <Link href={"/"}>
                    Back
                </Link>
            </button>
        </section>
    )
}

export default Projects 
