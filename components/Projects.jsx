import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Medical Diagnosis",
            description: "A deep learning system for early detection of medical conditions using computer vision and patient data analysis.",
            tags: ["AI", "Healthcare", "Deep Learning", "Computer Vision"],
            imageUrl: "/images/medical-ai.jpg", // You'll need to add actual images
            paperUrl: "https://example.com/paper1",
            demoUrl: "https://example.com/demo1",
            category: "Healthcare AI"
        },
        {
            title: "Smart Energy Grid Optimization",
            description: "Machine learning algorithms for optimizing energy distribution and consumption in smart cities.",
            tags: ["Machine Learning", "Smart Cities", "Energy", "IoT"],
            imageUrl: "/images/smart-grid.jpg",
            paperUrl: "https://example.com/paper2",
            demoUrl: "https://example.com/demo2",
            category: "Smart Infrastructure"
        },
        // Add more projects as needed
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Our Research Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Exploring the frontiers of technology through innovative research and development.
                        Our projects span multiple domains and have been recognized in prestigious conferences.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects 