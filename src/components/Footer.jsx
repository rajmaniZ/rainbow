import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/rainbow-logo.png";
import { company } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt="Rainbow" />
          <p>{company.shortDescription}</p>
          <a className="social-link" href={company.instagram} target="_blank" rel="noreferrer">
            <Instagram size={17} /> Instagram <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Rainbow</Link>
        </div>
        <div>
          <h4>Solutions</h4>
          <Link to="/products?category=ups">UPS Systems</Link>
          <Link to="/products?category=solar">Solar</Link>
          <Link to="/products?category=panels">Control Panels</Link>
          <Link to="/services">Electrical Services</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p className="contact-row"><MapPin size={16} /> {company.location}</p>
          <p className="contact-row"><Phone size={16} /> {company.phone}</p>
          <p className="contact-row"><Mail size={16} /> {company.email}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Rainbow. All rights reserved.</span>
        <span>Power solutions • Electrical engineering • Automation</span>
      </div>
    </footer>
  );
}
