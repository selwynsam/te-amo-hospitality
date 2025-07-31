"use client";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useEffect, useState, useRef } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "@/components/cover/Cover";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100, // trigger 100px before element comes into view
    });

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

  return (
    <>
      <Cover opened />
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
