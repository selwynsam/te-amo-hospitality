import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      {/* Optional Map Section - include if needed */}
      {/* <div className={styles.mapSection}></div> */}

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <div className={styles.companyName}>Te Amo Hospitality</div>
              <div className={styles.poweredBy}>
                Powered by SITE123 - Make your own website
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
