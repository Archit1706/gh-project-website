import Projects from "@/components/Projects";

export default function Spring2024() {
    const springProjects = [
        {
            title: "Government Contracts in the Pandemic Era: A Comprehensive Impact Analysis Using Predictive Analytics",
            // description: "A comprehensive impact analysis using predictive analytics.",
            tags: ["Predictive Analytics", "Government Contracts", "Data Analysis"],
            imageUrl: "/images/spring1.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Published in Springer Book Series Communications in Computer and Information Science, 2024"
        },
        {
            title: "LLM-POWERED OLAP: Tackling High-Level Business Questions",
            // description: "Tackling high-level business questions using Large Language Models.",
            tags: ["LLM", "OLAP", "Business Analytics"],
            imageUrl: "/images/spring2.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Predictive Purchasing & Savings for Scientific Lab Supplies",
            // description: "An innovative approach to optimize laboratory supply chain management.",
            tags: ["Predictive Analytics", "Supply Chain", "Cost Optimization"],
            imageUrl: "/images/spring3.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Second Prize - UIC Computational Research Symposium, April 2024"
        },
        {
            title: "Scabale image search engine",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Computer Vision", "Search Engine", "Scalability"],
            imageUrl: "/images/spring4.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Baseball Analysis using Tableau",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Tableau", "Data Analytics", "Sports Analytics"],
            imageUrl: "/images/spring5.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Predictive Analytics for UIC Baseball: Streamlit and Tableau Insights",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags:  ["Predictive Analytics", "Baseball Analytics", "Tableau", "Streamlit"],
            imageUrl: "/images/spring6.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Optimizing Resource Allocation: Predicting Government Contract Awards",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Machine Learning", "Resource Allocation", "Government Contracts"],
            imageUrl: "/images/spring7.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Predictive Modeling for Unreported Business Closures",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Predictive Analytics", "Business Closures", "Disaster Response"],
            imageUrl: "/images/spring8.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        },
        {
            title: "Enhancing Nonprofit Outreach: Predictive Analytics for Program Expansion",
            // description: "Advanced image search capabilities using modern AI techniques.",
            tags: ["Nonprofit Analytics", "Predictive Analytics", "Community Impact"],
            imageUrl: "/images/spring9.jpg",
            // paperUrl: "#",
            category: "Spring 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in 20th International Conference on Data Science, Las Vegas, July 2024"
        }
    ]
    return (
        <main className="bg-white">
            <Projects semester="Spring 2024" projects={springProjects} />
        </main>
    );
}



