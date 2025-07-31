import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.servicesTitle}>SERVICES</h2>
        <div className={styles.servicesUnderline}></div>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>🏠</div>
            <h3>Luxury Studio Apartment Rentals</h3>
            <p>
              Te Amo Hospitality offers luxurious and fully furnished studio
              apartments, ensuring a comfortable and memorable stay.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>⭐</div>
            <h3>Luxury Apartment Stays</h3>
            <p>
              Experience unmatched comfort and convenience with our luxury
              serviced apartments. Amenities cater to every need, ensuring an
              exceptional stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
