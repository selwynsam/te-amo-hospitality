"use client";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useEffect, useState, useRef } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
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
      <Header />
      <Hero />
      <About />

      <Services />

      <Contact />

      {/* Map Section */}
      <section className="map-section"></section>

      <Footer />
    </>
  );
}
