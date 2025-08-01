"use client";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { TiLocationArrow } from "react-icons/ti";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import IconButton from "@/components/Button/IconButton";
import MobileHeader from "./MobileHeader";

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
    <>
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>
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
            <div className={styles.logoCircle}>
              <img src="/logo.webp" />
            </div>
          </div>

          <div className={styles.navRight}>
            <a href="#contact">Contact</a>
            <div className={styles.socialIcons}>
              <IconButton className={styles.locationIcon}>
                <TiLocationArrow />
              </IconButton>
              <IconButton className={styles.shareIcon}>
                <IoShareSocialSharp className="share" />
              </IconButton>
              <IconButton className={styles.shareIcon}>
                <TbMailFilled className="mail" />
              </IconButton>
              <IconButton className={styles.phoneIcon}>
                <FaPhoneAlt className="phone" />
              </IconButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
