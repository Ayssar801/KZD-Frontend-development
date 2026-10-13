import { useState } from "react";
import "../App.css";
import heroImage from "../assets/hero.png";

const slides = [
  {
    image: heroImage,
    alt: "Business team working together in a meeting",
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern office interior",
  },
];

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  const showSlide = (direction) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section className="hero-section" id="home" aria-label="Featured information">
      <div className="hero-slide" key={activeSlide}>
        <img
          src={slide.image}
          alt={slide.alt}
          className="hero-img"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = heroImage;
          }}
        />
        <div className="hero-text">
          <h1>Business <strong>YOUR SATISFICTION</strong></h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-outline" type="button">Login</button>
            <button className="hero-btn hero-btn-outline" type="button">Register</button>
          </div>
        </div>
      </div>

      <button
        className="carousel-arrow carousel-prev"
        type="button"
        aria-label="Previous slide"
        onClick={() => showSlide(-1)}
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-next"
        type="button"
        aria-label="Next slide"
        onClick={() => showSlide(1)}
      >
        ›
      </button>
      <div className="carousel-dots" aria-label="Choose a slide">
        {slides.map((item, index) => (
          <button
            className={`carousel-dot${activeSlide === index ? " active" : ""}`}
            type="button"
            key={item.alt}
            aria-label={`Show slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
