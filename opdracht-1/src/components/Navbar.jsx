import "../App.css";
import logo from "../assets/Schermafbeelding 2026-09-22 100019.png";
import searchIcon from "../assets/searchIcon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="site-container">
        <div className="navbar-brand" aria-label="Alteco">
          <img src={logo} alt="Alteco Business Template" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><span className="nav-link">Home</span></li>
            <li className="nav-item"><span className="nav-link">About Us</span></li>
            <li className="nav-item"><span className="nav-link">Services</span></li>
            <li className="nav-item"><span className="nav-link">Pages</span></li>
            <li className="nav-item"><span className="nav-link">Shop</span></li>
            <li className="nav-item"><span className="nav-link">Blog</span></li>
            <li className="nav-item"><span className="nav-link">Contact Us</span></li>
            <li className="nav-item">
              <img className="nav-img" src={searchIcon} alt="Search" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
