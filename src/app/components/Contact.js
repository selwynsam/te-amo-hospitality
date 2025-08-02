import styles from "./Contact.module.css";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

export default function Contact() {
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";

    const isValid = Object.keys(newErrors).length === 0;

    if (!isValid) {
      alert(JSON.stringify(newErrors));
    }

    return isValid;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submittedData = Object.fromEntries(formData.entries());
    console.log("Data captured from the event:", submittedData);

    if (validateForm(submittedData)) {
      console.log("Form is valid, creating email...");

      const subject = encodeURIComponent(
        `Contact Form Submission from ${submittedData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${submittedData.name}\n` +
          `Phone: ${submittedData.phone}\n` +
          `Email: ${submittedData.email}\n\n` +
          `Message:\n${submittedData.message}`
      );

      // Replace 'your-email@example.com' with your actual email address
      window.location.href = `mailto:teamohospitality@gmail.com?subject=${subject}&body=${body}`;

      // Optional: Reset the form fields after successful submission
      form.reset();
    } else {
      console.log("Form has validation errors.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container" data-aos="slide-up">
        <h2 className={styles.contactTitle}>CONTACT US</h2>
        <div className={styles.contactUnderline}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div>
              2nd Flr, Rushivar Building, Badem Road, Near Sorro Junction,
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

          <form className={styles.contactForm} onSubmit={handleContactSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" name="phone" placeholder="Phone" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.contactBtn}>
              Submit
            </button>
          </form>
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
