import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="brand-name">AESTHETIC HAUS</span>
        </Link>
        <button
          className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavCollapse}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={handleNavCollapse}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team" onClick={handleNavCollapse}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavCollapse}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={handleNavCollapse}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
