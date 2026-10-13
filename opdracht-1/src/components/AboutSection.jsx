import "../App.css";
import teamImage from "../assets/hero.png";

function AboutSection() {
  return (
    <section className="what-we-do" id="about">
      <div className="site-container about-grid">
        <div className="about-picture">
          <img src={teamImage} alt="A team discussing ideas around a conference table" />
        </div>
        <div className="about-copy">
          <p className="section-eyebrow">What We Do</p>
          <h2>We help your business move forward</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <ul className="about-points">
            <li>Promotion Agency</li>
            <li>Constructions Building</li>
            <li>Education Online</li>
            <li>Fashion Design</li>
          </ul>
          <a className="section-button" href="#services">Learn more</a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
