import styles from "./Contact.module.css";

export default function Contact() {
  const handleContactSubmit = () => {
    // Your submit logic here
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.contactTitle}>CONTACT</h2>
        <div className={styles.contactUnderline}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <p>
              2nd Flr, Bombay Building, Ruben Road, Near Seven Junction,
              Assagaon,
            </p>
            <p>Vagator, Goa - 403507</p>
            <p className={styles.phone}>📞 +91 8408963843</p>
            <p className={styles.email}>📧 teamohospitality@gmail.com</p>
            <p className={styles.website}>🌐 24hrs</p>

            <div className={styles.contactDescription}>
              <p>
                With a growing presence in vibrant urban locations, Te Amo
                Hospitality continues to redefine what it means to celebrate and
                connect — all under the guiding ethos of love, elegance and
                authenticity.
              </p>
            </div>

            <div className={styles.instagramIcon}>📷</div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Phone" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email address" />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Message"></textarea>
            </div>
            <button className={styles.contactBtn} onClick={handleContactSubmit}>
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
