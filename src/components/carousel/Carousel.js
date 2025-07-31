import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export default function Carousel({ slides = [1, 2, 3, 4] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.container}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img src="https://files.cdn-files-a.com/uploads/11056245/800_68883a9dbba16.jpg" />
          </div>
        ))}
      </div>
    </div>
  );
}
