import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "AI Automation Intern",
    company: "IPAGE UMS Pvt Ltd",
    period: "Nov 2025 – Feb 2026",
    summary:
      "Developed an AI-powered Social Media Auto-Posting Agent that automates content generation, scheduling, and multi-platform publishing.Integrated APIs and workflow automation to streamline operations and significantly reduce manual effort.Improved overall efficiency through intelligent AI-driven system integration.",
    tags: ["N8n", "Docker", "JavaScript", "API-Integration"],
  },
  {
    role: "Web Development Intern",
    company: "Nexus Logic Technologies",
    period: "Mar 2025 – May 2025",
    summary:
      "During my internship at NexusLogic Technologies, I developed a responsive Business Website and a Management System to streamline organizational operations. The project included designing essential web pages, implementing user and admin functionalities, and managing data efficiently. I focused on clean UI design, structured navigation, and creating a smooth and user-friendly experience.",
    tags: ["Javascript", "React","Node-Js","Mongoose"],
  },
  {
    role: "AI Intern",
    company: "Smart ED",
    period: "Jul 2025 – Sep 2025",
    summary:
      "During my AI Internship at Smart Ed, I developed a Fake News Detection System using Machine Learning and NLP to classify news articles as real or fake. I performed text preprocessing, applied TF-IDF for feature extraction, and trained classification models to achieve accurate and efficient predictions.",
    tags:["Python", "NLP", "Scikit-learn","TF-IDF"],
  },
  {
    role: "AWS AI & ML Intern",
    company: "Edu Skills",
    period: "Apr 2025 – May 2025",
    summary:
      "During my AWS AI & ML Internship, I collaborated with my team to develop a serverless web application using AWS cloud services. The project leveraged AWS Lambda for backend logic, API Gateway for routing, and cloud storage services for data management. We focused on scalability, cost efficiency, and seamless deployment by utilizing a fully serverless architecture integrated with AI/ML components.",
    tags: ["AWS", "AWS Lambda", "AWS DynamoDB"],
  },
];

const Experience = () => (
  <section className="timeline-section" id="experience">
    <motion.div
      className="timeline-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="timeline-title">Experience</h2>
      <p className="timeline-subtitle">Internships and professional roles.</p>
    </motion.div>

    <div className="timeline-list">
      {experienceItems.map((item, index) => (
        <motion.article
          key={`${item.role}-${item.company}`}
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
        >
          <div 
            className="timeline-date"
          >
            {item.period}
          </div>
          <div className="timeline-content">
            <h3>
              {item.role}
            </h3>
            <p 
              className="timeline-org"
            >
              {item.company}
            </p>
            <p 
              className="timeline-desc"
            >
              {item.summary}
            </p>
            {item.tags?.length ? (
              <div className="timeline-tags">
                {item.tags.map((tag, idx) => (
                  <motion.span
                    key={`${item.role}-${tag}`}
                    className="timeline-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
