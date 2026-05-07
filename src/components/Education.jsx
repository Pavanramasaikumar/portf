import { motion } from "framer-motion";

const educationItems = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College of Engineering",
    meta: "2023 – 2027 | CGPA: 9.1 / 10",
  },
  {
    degree: "12th (Senior Secondary)",
    school: "Tirumala College",
    meta: "2021 – 2023 | 97%",
  },
  {
    degree: "10th (Secondary)",
    school: "Montessories Em School",
    meta: "2020 – 2021 | 95%",
  },
];

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <motion.h2
        className="section-title education-title"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education 🎓
      </motion.h2>
      <div className="education-list">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.degree}
            className="education-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3>
              {item.degree}
            </h3>
            <p className="education-school">
              {item.school}
            </p>
            <p className="education-meta">
              {item.meta}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
