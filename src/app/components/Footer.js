import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      {/* Optional Map Section - include if needed */}
      {/* <div className={styles.mapSection}></div> */}

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <h2 className={styles.companyName}>Te Amo Hospitality</h2>
              <div className={styles.poweredBy}>
                Copyright © 2025 All rights reserved
              </div>
            </div>
            <div className={styles.footerRight}>
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#services">SERVICES</a>
              <a href="#contact">CONTACT</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
