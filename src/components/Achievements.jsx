import { motion } from "framer-motion";

const achievements = [
  {
    title: "NCAT 2025",
    date: "2025",
    detail: "Secured All India Rank 14067 in NCAT 2025.",
  },
  {
    title: "ICAT 2025",
    date: "2025",
    detail: "Secured All India Rank 2325 in ICAT 2025.",
  },
  {
    title: "AaryaJanani Scholarship Test 2025",
    date: "2025",
    detail:
      "Secured 73% in AaryaJanani National-Level Scholarship Test 2025.",
  },
];

const Achievements = () => (
  <section className="timeline-section" id="achievements">
    <motion.div
      className="timeline-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="timeline-title">Achievements</h2>
      <p className="timeline-subtitle">
        Academic milestones and competitive achievements.
      </p>
    </motion.div>

    <div className="timeline-list">
      {achievements.map((achievement, index) => (
        <motion.article
          key={achievement.title}
          className="timeline-item"
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
        >
          <div 
            className="timeline-date"
          >
            {achievement.date}
          </div>
          <div className="timeline-content">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
            >
              {achievement.title}
            </motion.h3>
            <motion.p
              className="timeline-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
            >
              {achievement.detail}
            </motion.p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Achievements;
