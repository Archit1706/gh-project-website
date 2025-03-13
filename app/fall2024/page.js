import Projects from "@/components/Projects";

export default function Fall2024() {
    const fallProjects = [
        {
            title: "AI-Driven Recruitment Decision Support Tool using LLM",
            // description: "Leveraging LLMs to enhance recruitment processes and decision-making.",
            tags: ["AI", "LLM", "HR Tech", "Recruitment"],
            imageUrl: "/images/fall1.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "AI-Driven LLM Agent for Data WorkFlow",
            // description: "Intelligent automation of data workflows using LLM agents.",
            tags: ["AI", "LLM", "Workflow Automation", "Data Processing"],
            imageUrl: "/images/fall2.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "Metadata Enrichment: An LLM-Powered Chatbot for Internal Knowledge Retrieval",
            // description: "Leveraging LLMs to enhance recruitment processes and decision-making.",
            tags: ["LLM", "Metadata Enrichment", "Knowledge Retrieval", "Chatbot"],
            imageUrl: "/images/fall3.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "AI-Driven Image Generation: Leveraging Stable Diffusion and LoRA Fine-Tuning",
            // description: "Intelligent automation of data workflows using LLM agents.",
            tags: ["Stable Diffusion", "LoRA", "AI Image Generation", "Machine Learning"],
            imageUrl: "/images/fall4.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "Demand Prediction and Supply Gap Analysis Using Machine Learning",
            // description: "Leveraging LLMs to enhance recruitment processes and decision-making.",
            tags: ["Machine Learning", "Demand Prediction", "Supply Chain Analytics"],
            imageUrl: "/images/fall5.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        },
        {
            title: "Targeted Employment Support: Intervention Recommendation Using AI",
            // description: "Intelligent automation of data workflows using LLM agents.",
            tags: ["AI", "Employment Support", "Intervention Recommendation", "NLP"],
            imageUrl: "/images/fall6.jpg",
            // paperUrl: "#",
            category: "Fall 2024",
            facultyAdvisor: "Fatemeh Sarayloo",
            // achievement: "Accepted in the 2025 International Conference on AI revolution (18% acceptance rate)"
        }
    ]
    return (
        <main className="bg-white">
            <Projects semester="Fall 2024" projects={fallProjects} />
        </main>
    );
}
