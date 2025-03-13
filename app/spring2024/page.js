import Projects from "@/components/Projects";

export default function Spring2024() {
    const springProjects = [
        {
            title: "Government Contracts in the Pandemic Era",
            description: "A comprehensive impact analysis using predictive analytics. Published in Communications in Computer and Information Science.",
            tags: ["Predictive Analytics", "Government Contracts", "Data Analysis"],
            imageUrl: "/images/gov-contracts.jpg",
            paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Paper Publication"
        },
        {
            title: "LLM-POWERED OLAP",
            description: "Tackling high-level business questions using Large Language Models.",
            tags: ["LLM", "OLAP", "Business Analytics"],
            imageUrl: "/images/llm-olap.jpg",
            paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Predictive Purchasing & Savings for Scientific Lab Supplies",
            description: "An innovative approach to optimize laboratory supply chain management.",
            tags: ["Predictive Analytics", "Supply Chain", "Cost Optimization"],
            imageUrl: "/images/lab-supplies.jpg",
            paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Second Prize - UIC Computational Research Symposium, April 2024"
        },
        {
            title: "SCALABLE IMAGE SEARCH ENGINE",
            description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Computer Vision", "Search Engine", "Scalability"],
            imageUrl: "/images/image-search.jpg",
            paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        }
    ]
    return (
        <main className="bg-white">
            <Projects semester="Spring 2024" projects={springProjects} />
        </main>
    );
}



