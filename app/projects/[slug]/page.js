import ProjectDetail from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

// Get all projects with achievements
const getProjects = () => {
    const fallProjects = [
        {
            title: "AI-Driven Recruitment Decision Support Tool using LLM",
            description: "An innovative project leveraging Large Language Models to revolutionize recruitment processes. This tool assists HR professionals in making data-driven decisions by analyzing candidate profiles, job requirements, and market trends.",
            tags: ["AI", "LLM", "HR Tech", "Recruitment"],
            imageUrl: "/images/fall1.jpg",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "AI-Driven LLM Agent for Data WorkFlow",
            description: "A cutting-edge project that implements intelligent automation in data workflows using LLM agents. This system streamlines data processing tasks and enhances operational efficiency through AI-driven decision making.",
            tags: ["AI", "LLM", "Workflow Automation", "Data Processing"],
            imageUrl: "/images/fall2.jpg",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        }
    ]

    const springProjects = [
        {
            title: "Government Contracts in the Pandemic Era: A Comprehensive Impact Analysis Using Predictive Analytics",
            description: "A groundbreaking study analyzing the impact of the pandemic on government contracting using advanced predictive analytics. This research provides valuable insights for policy makers and government agencies.",
            tags: ["Predictive Analytics", "Government Contracts", "Data Analysis"],
            imageUrl: "/images/spring1.jpg",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Published in Springer Book Series Communications in Computer and Information Science, 2024"
        },
        {
            title: "LLM-POWERED OLAP: Tackling High-Level Business Questions",
            description: "An innovative approach to business analytics that combines the power of Large Language Models with OLAP systems. This project enables natural language querying of complex business data.",
            tags: ["LLM", "OLAP", "Business Analytics"],
            imageUrl: "/images/spring2.jpg",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Predictive Purchasing & Savings for Scientific Lab Supplies",
            description: "An innovative solution for optimizing laboratory supply chain management through predictive analytics. This project helps research institutions reduce costs while maintaining quality standards.",
            tags: ["Predictive Analytics", "Supply Chain", "Cost Optimization"],
            imageUrl: "/images/spring3.jpg",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Second Prize - UIC Computational Research Symposium, April 2024"
        },
        {
            title: "Scabale image search engine",
            description: "A high-performance image search system that combines modern computer vision techniques with efficient scaling strategies. This engine provides fast and accurate image retrieval for large-scale applications.",
            tags: ["Computer Vision", "Search Engine", "Scalability"],
            imageUrl: "/images/spring4.jpg",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        }
    ]

    return [...fallProjects, ...springProjects]
}

// Get a specific project by slug
const getProjectBySlug = (slug) => {
    const projects = getProjects()
    return projects.find(project => {
        const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        return projectSlug === slug
    })
}

export default function ProjectPage({ params }) {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    return <ProjectDetail {...project} />
}

// Generate static params for all projects with achievements
export function generateStaticParams() {
    const projects = getProjects()
    return projects.map((project) => ({
        slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }))
} 