import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import profileImage from "../images/pawss-removebg-preview.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <button
            className="navbar__toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <HiMiniXMark /> : <HiMiniBars3BottomRight />}
          </button>
        </div>
        <div className="navbar__socials">
          <motion.a
            href="https://www.instagram.com/pavan_naidu_sirigineedi"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pavan-rama-sai-kumar-siriginidi-57b1a1372/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://github.com/Pavanramasaikumar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <FaXTwitter />
          </motion.a>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="sidebar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="sidebar"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="sidebar__profile">
                <motion.img 
                  src={profileImage} 
                  alt="Profile" 
                  className="sidebar__profile-image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.08 }}
                />
                <motion.div 
                  className="sidebar__profile-info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IoPerson className="sidebar__profile-icon" />
                  </motion.div>
                  <h3 className="sidebar__profile-name">Siriginidi P R S Kumar</h3>
                </motion.div>
              </div>
              <nav className="sidebar__nav">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                    whileHover={{ 
                      x: 8,
                      color: "rgba(56, 189, 248, 1)",
                      textShadow: "0 0 10px rgba(56, 189, 248, 0.5)"
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
