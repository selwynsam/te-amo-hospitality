"use client";

import IconButton from "@/components/Button/IconButton";
import styles from "./MobileHeader.module.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Cover from "@/components/cover/Cover";

export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.spacer} />

        <div className={styles.logoContainer}>
          <div className={styles.logoCircle}>
            <img src="https://files.cdn-files-a.com/uploads/11056245/400_filter_nobg_6888415a9132a.png" />
          </div>
        </div>
        <IconButton className={styles.icon} onClick={toggleMenu}>
          <IoMenu />
        </IconButton>
      </div>

      <Cover opened={showMenu} onClose={toggleMenu}>
        <div className={styles.list}>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </Cover>
    </>
  );
}
