"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.pageYOffset > 50) {
          headerRef.current.classList.add(styles.headerScrolled);
        } else {
          headerRef.current.classList.remove(styles.headerScrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerContent}>
        <nav>
          <ul className={styles.navLeft}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>

        <div className={styles.logoContainer}>
          <div className={styles.logoCircle}></div>
        </div>

        <div className={styles.navRight}>
          <a href="#contact">Contact</a>
          <div className={styles.socialIcons}>
            <span>📞</span>
            <span>📧</span>
            <span>🌐</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;