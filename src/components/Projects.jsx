import { motion } from "framer-motion";
import project2 from "../images/project2.png";
import project4 from "../images/project4.png";
import project1 from "../images/project1.png";
import project3 from "../images/project3.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";

const projects = [
  {
    title: "Social Media AutoPosting Agent",
    description:
      "It is a Social Media Auto-Posting AI Agent that automatically generates, schedules, and publishes content across multiple platforms. The system integrates AI-driven content creation with API-based automation to reduce manual effort and improve efficiency.",
    image: project2,
    demo: "",
    tags: ["n8n", "Webhooks", "OpenAI API", "REST API"],
  },
  {
    title: "SeverLess Web Application",
    description:
      "A Serverless Web Application built on AWS using Lambda, API Gateway, and DynamoDB/S3 for scalable and cost-efficient deployment. The architecture eliminates traditional server management while ensuring high availability and automatic scaling.",
    image: project4,
    demo: "",
    tags: ["AWS", "AWS Lambda", "AWS DynamoDB"],
  },
  {
    title: "Automated Attendence System",
    description:
      "It is an Automated Attendance System using Python and the Buffalo face recognition model that converts uploaded classroom images into embeddings and matches them with stored student data. The system automatically marks students as present or absent with high accuracy.",
    image: project1,
    demo: "",
    tags: ["Python","Open CV","Buffalo-Model"],
  },
  {
    title: "Eco-Buddy",
    description:
      "A React-based e-commerce web application similar to Flipkart that promotes sustainable shopping. It includes an AI chatbot that recommends eco-friendly alternatives and suggests sustainable options when users select plastic products, enhancing user experience and encouraging responsible purchasing.",
    image: project3,
    demo: "https://ecobuddy-chi.vercel.app/",
    tags: ["React","MongoDB","Node JS","AI Integration(Groq-AI)"],
  },
  {
    title: "Personal Assistant",
    description:
      "Developed a Personal Assistant Automated Agent using n8n that automates email sending, calendar scheduling, and real-time web search via SERP API. It supports both voice and text input, delivering accurate responses through intelligent workflow automation to enhance productivity.",
    image: project5,
    demo: "",
    tags: ["N8n","Docker","OpenAI API","Webhook","SERP API"],
  },
  {
    title: "Business Website",
    description:
      "I developed a modern and responsive business website using React.js for the frontend. The website is designed to provide a professional online presence for a business, showcasing services, company information, and contact details.",
    image: project6,
    demo: "",
    tags: ["React","Node JS","Bootstrap"],
  },
  {
    title: "Financial Chat Bot",
    description:
      "A Python-based AI financial assistant for students and professionals. It provides personalized budgeting, savings, and financial planning advice through Student and Professional modes. Powered by Groq API with Hugging Face as a backup for reliable AI responses.",
    image: project7,
    demo: "https://financhatbot.streamlit.app/",
    tags: ["Streamlit", "Python", "Hugging Face API", "Groq API"],
  },
];

const Projects = () => {
  return (
    <section className="timeline-section" id="projects">
      <div className="timeline-header">
        <h2 className="timeline-title">Projects</h2>
        <p className="timeline-subtitle">
        A highlight reel of recent UI builds and automation-friendly interfaces.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-item"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <motion.div 
              className="project-media"
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>
            <div className="project-body">
              <h3>
                {project.title}
              </h3>
              <p 
                className="timeline-desc"
              >
                {project.description}
              </p>
              <div className="timeline-tags">
                {project.tags.map((tag, idx) => (
                  <motion.span 
                    key={tag}
                    className="timeline-tag"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="project-actions">
                {project.demo && project.demo.length > 0 ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-btn"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    type="button"
                    className="project-demo-btn project-demo-btn--disabled"
                    disabled
                  >
                    Demo coming soon
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
