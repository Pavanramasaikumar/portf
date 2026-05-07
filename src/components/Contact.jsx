import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resumeFile from "../assets/resume.pdf";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavan-rama-sai-kumar-siriginidi-57b1a1372/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Pavanramasaikumar",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pavan_naidu_sirigineedi",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
];

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks for reaching out. Please connect with me by email or social links for now.");
  };

  return (
    <section className="section" id="contact">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="section-title about-heading">Contact</h2>
        <p className="section-subtitle">
          I’m open to internships, freelance work, and collaboration on AI and web projects.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <h3>Reach me directly</h3>
          <p>
            Email: <a className="contact-email" href="mailto:siriginidipavan@gmail.com">siriginidipavan@gmail.com</a>
          </p>
          <a className="btn btn-primary resume-btn" href={resumeFile} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <p>
            I usually respond fastest through LinkedIn or email.
          </p>
          <div className="socials">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          className="contact-form card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
          <input type="email" name="email" placeholder="Your email" aria-label="Your email" />
          <textarea name="message" placeholder="Tell me about your project" aria-label="Tell me about your project" />
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          {status ? <p className="form-status form-status--success">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
