import styles from "./Contact.module.css";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

export default function Contact() {
  const handleContactSubmit = () => {
    // Your submit logic here
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.contactTitle}>CONTACT</h2>
        <div className={styles.contactUnderline}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div>
              2nd Flr, Bombay Building, Ruben Road, Near Seven Junction,
              Assagaon,
            </div>
            <div>Vagator, Goa - 403507</div>

            <div className={styles.info}>
              <FaPhoneAlt />
              +91 8408963843
            </div>

            <div className={styles.info}>
              <AiOutlineMail /> teamohospitality@gmail.com
            </div>

            <div className={styles.info}>
              <FaRegClock /> 24hrs
            </div>

            <div className={styles.contactDescription}>
              <p>
                With a growing presence in vibrant urban locations, Te Amo
                Hospitality continues to redefine what it means to celebrate and
                connect — all under the guiding ethos of love, elegance and
                authenticity.
              </p>
            </div>

            <a
              className={styles.instagramIcon}
              href="https://www.instagram.com/te_amo_hospitality"
              target="_blank"
            >
              <RiInstagramLine />
            </a>
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
      {/* ======================= GOOGLE MAPS ==================== */}
      <div className={styles.map}>
        <iframe
          src="https://maps.google.com/maps?q=2nd+Off+Assagaon+Badem+Rd+Vagator,+Assagao,Goa-+403507@15.605865,73.755008&z=15&output=embed&disableDefaultUI=true&zoomControl=false&mapTypeControl=false&streetViewControl=false&fullscreenControl=false"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
