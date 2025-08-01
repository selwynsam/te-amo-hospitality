import Carousel from "@/components/carousel/Carousel";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div data-aos="slide-up" className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About Us</h2>
            <p>
              Welcome to Te Amo Hospitality, where exceptional service meets the
              comforts of home. We specialize in providing premium service
              apartments designed to cater to your needs, whether for business
              or leisure. Experience seamless stays in our expertly maintained
              accommodations, each curated to deliver unparalleled comfort,
              convenience, and hospitality excellence.
            </p>
          </div>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
