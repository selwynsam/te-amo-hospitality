import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Comfort Meets Elegance</h1>
        <p className={styles.heroSubtitle}>
          Experience seamless living with our service apartments for your
          personalized stay.
        </p>
      </div>
    </section>
  );
};

export default Hero;
