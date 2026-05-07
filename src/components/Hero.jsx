import { motion } from "framer-motion";
import profileImage from "../images/pawss-removebg-preview.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + index * 0.1 },
  }),
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section className="section hero-section" id="home">
      <div className="hero hero-layout">
        <div className="hero__text">
          <motion.h1
            className="hero__name"
            variants={textVariants}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Siriginidi P R S Kumar
          </motion.h1>
          <motion.h2
            className="hero__role"
            variants={textVariants}
            initial="hidden"
            animate="show"
            custom={1}
          >
            AI Automation Engineer, Frontend Developer
          </motion.h2>
          <motion.p
            className="hero__desc"
            variants={textVariants}
            initial="hidden"
            animate="show"
            custom={2}
          >
            I’m a passionate Computer Science student with a strong interest in AI-powered automation, web applications, and modern software development. I’ve honed my skills through hands-on internships and real-world projects using technologies like Python, Java, React, JavaScript, and cloud platforms such as AWS, along with automation tools like n8n. I enjoy leveraging my technical skills and creativity to build scalable, efficient, and secure solutions. Whether it’s developing responsive web interfaces, designing cloud-based serverless applications, or automating workflows with AI, I’m always eager to learn new tools and stay updated with industry trends to ensure the solutions I deliver are modern, reliable, and future-ready.
          </motion.p>
        </div>
        <motion.div
          className="hero__image-wrap"
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          variants={floatingVariants}
          whileInView="animate"
        >
          <motion.img
            className="hero__image"
            src={profileImage}
            alt="Profile"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(56, 189, 248, 0.35)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
