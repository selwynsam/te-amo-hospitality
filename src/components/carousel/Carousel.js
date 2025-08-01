import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export default function Carousel({ slides = [] }) {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.container}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img src={slide.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
