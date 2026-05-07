import { color, motion } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiN8N,
  SiDocker,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaBrain, FaAws, FaJava } from "react-icons/fa6";
import { MdOutlineAutoAwesome, MdOutlineAccountTree } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "Java", icon: FaJava, color: "#f2a365" },
  { name: "Python", icon: SiPython, color: "#8fd1ff" },
  { name: "HTML5", icon: SiHtml5, color: "#ff9b73" },
  { name: "CSS3", icon: SiCss3, color: "#8ab6ff" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7d36b" },
  { name: "React", icon: SiReact, color: "#7dd3fc" },
  { name: "Node Js",icon:SiNodedotjs,color:"#44f379"},
  { name: "MongoDB",icon:SiMongodb,color:"#07b435"},
  { name: "Bootstrap", icon: SiBootstrap, color: "#c4a7ff" },
  { name: "Artificial Intelligence", icon: FaBrain, color: "#9ef0c3" },
  { name: "AI Automation", icon: MdOutlineAutoAwesome, color: "#f3a6ff" },
  { name: "Data Structures", icon: MdOutlineAccountTree, color: "#9fd7ff" },
  { name: "AWS (S3, Lambda, API Gateway, DynamoDB, SageMaker)", icon: FaAws, color: "#ffd29d" },
  { name: "n8n", icon: SiN8N, color: "#ffb4c7" },
  { name: "Rest API",icon: TbApi,color: "#8ab6ff"},
  { name: "Docker", icon: SiDocker, color: "#87c6ff" },
  { name: "Git", icon: SiGit, color: "#ff9b73" },
  { name: "Git & GitHub", icon: SiGithub, color: "#cfd8e3" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, rotate: -10 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    transition: { duration: 0.4 } 
  },
};

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <motion.h2
        className="section-title skills-title"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technologies 👨‍💻
      </motion.h2>
      <motion.div
        className="skills-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="skill-icon-btn"
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: [0, -8, 8, -8, 0] }}
              whileTap={{ scale: 0.95 }}
              title={skill.name}
              aria-label={skill.name}
            >
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon style={{ color: skill.color }} />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
