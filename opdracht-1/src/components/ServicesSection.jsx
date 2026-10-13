import "../App.css";
import consultingIcon from "../assets/arrow-top-right-svgrepo-com.svg";
import financeIcon from "../assets/diamond-mark-2-svgrepo-com.svg";
import analysisIcon from "../assets/grid-outline-svgrepo-com.svg";

const services = [
  {
    icon: consultingIcon,
    iconAlt: "Business growth",
    title: "Business Consulting",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: financeIcon,
    iconAlt: "Financial planning",
    title: "Financial Planning",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: analysisIcon,
    iconAlt: "Market analysis",
    title: "Market Analysis",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="site-container">
        <div className="services-heading">
          <p className="section-eyebrow">What We Offer</p>
          <h2>Our Services</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <img src={service.icon} alt={service.iconAlt} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
