import Projects from "@/components/Projects";

export default function Fall2024() {
    const fallProjects = [
        {
            title: "AI-Driven Recruitment Decision Support Tool using LLM",
            description: "Leveraging LLMs to enhance recruitment processes and decision-making.",
            tags: ["AI", "LLM", "HR Tech", "Recruitment"],
            imageUrl: "/images/recruitment-ai.jpg",
            paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "AI-Driven LLM Agent for Data WorkFlow",
            description: "Intelligent automation of data workflows using LLM agents.",
            tags: ["AI", "LLM", "Workflow Automation", "Data Processing"],
            imageUrl: "/images/llm-agent.jpg",
            paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        }
    ]
    return (
        <main className="bg-white">
            <Projects semester="Fall 2024" projects={fallProjects} />
        </main>
    );
}
