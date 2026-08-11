import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import logo from "../assets/rainbow-logo.png";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/contact", "Contact"],
];

export default function Header({ cartCount, onCart }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Rainbow" />
        </Link>

        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn cart-btn"
            onClick={onCart}
            aria-label="Open enquiry cart"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <Link className="nav-cta" to="/contact">
            Get a Quote
          </Link>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className={`mobile-nav ${open ? "show" : ""}`}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
