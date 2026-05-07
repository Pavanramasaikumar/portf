import { motion } from "framer-motion";
import aboutImage from "../images/about.jpg";

const About = () => (
  <section className="section about-section" id="about">
    <motion.div
      className="about-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <h2 className="section-title about-heading">About Me</h2>
    </motion.div>

    <div className="about-grid">
      <motion.div
        className="about-image-wrap"
        initial={{ opacity: 0, x: -24, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          scale: 1.08, 
          rotate: 5,
          boxShadow: "0 40px 80px rgba(56, 189, 248, 0.4)"
        }}
      >
        <motion.img
          className="about-image"
          src={aboutImage}
          alt="Developer at a desk with UI mockups"
          loading="lazy"
          whileHover={{
            boxShadow: "0 40px 80px rgba(56, 189, 248, 0.4)",
            filter: "brightness(1.1)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="about-copy"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        whileHover={{
          x: 8
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{
            color: "rgba(56, 189, 248, 0.9)",
            letterSpacing: "0.5px"
          }}
        >
          I am a passionate Frontend Developer focused on creating modern,
          responsive, and user-friendly web interfaces. I specialize in building
          visually appealing and high-performance applications using React,
          JavaScript, HTML, CSS, and Tailwind CSS. I enjoy transforming creative
          ideas and designs into clean, efficient, and interactive user
          experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          whileHover={{
            color: "rgba(56, 189, 248, 0.9)",
            letterSpacing: "0.5px"
          }}
        >
          In addition to frontend development, I work with AI Automation to
          build intelligent solutions that streamline workflows and enhance user
          interactions. I integrate AI-powered features, APIs, and automation
          tools into web applications to create smarter and more efficient
          digital experiences. I am always eager to explore emerging
          technologies, continuously improve my skills, and build innovative
          projects that combine frontend excellence with AI-driven automation.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default About;
