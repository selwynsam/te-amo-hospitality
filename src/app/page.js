"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Parallax and header shadow effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const backgroundText = document.querySelector(".hero-background-text");

      if (backgroundText && scrolled < window.innerHeight) {
        backgroundText.style.transform = `translate(-50%, -50%) translateY(${
          scrolled * 0.3
        }px)`;
      }

      if (headerRef.current) {
        if (scrolled > 50) {
          headerRef.current.classList.add("header-scrolled");
        } else {
          headerRef.current.classList.remove("header-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleSite123Click = () => {
    alert("Redirecting to SITE123...");
  };

  const handleCreateWebsiteClick = () => {
    alert("Create your website with SITE123!");
  };

  return (
    <>
      {/* Header */}
      <header className="header" ref={headerRef}>
        <div className="header-content">
          <nav>
            <ul className="nav-left">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </nav>

          <div className="logo-container">
            <div className="logo-circle"></div>
          </div>

          <div className="nav-right">
            <a href="#contact">Contact</a>
            <div className="social-icons">
              <span>📞</span>
              <span>📧</span>
              <span>🌐</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background-text">Te Amo Hospitality</div>
        <div className="hero-content">
          <h1 className="hero-title">Comfort Meets Elegance</h1>
          <p className="hero-subtitle">
            Experience seamless living with our service apartments for your
            personalized stay.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About The Website</h2>
              <p>
                Welcome to Te Amo Hospitality, where exceptional service meets
                the comforts of home. We specialize in providing premium service
                apartments designed to cater to your needs, whether for business
                or leisure. Experience seamless stays in our expertly maintained
                accommodations, each curated to deliver unparalleled comfort,
                convenience, and hospitality excellence.
              </p>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="services-title">SERVICES</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏠</div>
              <h3>Luxury Studio Apartment Rentals</h3>
              <p>
                Te Amo Hospitality offers luxurious and fully furnished studio
                apartments, ensuring a comfortable and memorable stay.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">⭐</div>
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="contact-title">CONTACT</h2>
          <div className="contact-underline"></div>
          <div className="contact-content">
            <div className="contact-info">
              <p>
                2nd Flr, Bombay Building, Ruben Road, Near Seven Junction,
                Assagaon,
              </p>
              <p>Vagator, Goa - 403507</p>
              <p className="phone">📞 +91 8408963843</p>
              <p className="email">📧 teamohospitality@gmail.com</p>
              <p className="website">🌐 Sites</p>

              <div className="contact-description">
                <p>
                  With a growing presence in vibrant urban locations, Te Amo
                  Hospitality continues to redefine what it means to celebrate
                  and connect — all under the guiding ethos of love, elegance
                  and authenticity.
                </p>
              </div>

              <div className="instagram-icon">📷</div>
            </div>

            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" />
                </div>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="contact-btn" onClick={handleContactSubmit}>
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section"></section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="company-name">Te Amo Hospitality</div>
              <div className="powered-by">
                Powered by SITE123 - Make your own website
              </div>
            </div>
            <div className="footer-right">
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
